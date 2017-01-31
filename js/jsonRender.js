
var jsonRender = {
	
	'transform': function(json,transform,_options) {
		
		var out = {'events':[],'html':''};
		
		var options = {
			'events':false
		};
		
		options = jsonRender._extend(options,_options);

		if( transform !== undefined || json !== undefined ) {

			var obj = typeof json === 'string' ? JSON.parse(json) : json;
			
			out = jsonRender._transform(obj, transform, options);
		}
		
		if(options.events) return(out);
			else return( out.html );
	},
	
	'_extend':function(obj1,obj2){
		var obj3 = {};
		for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
		for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
		return obj3;
	},
	
	'_append':function(obj1,obj2) {
		var out = {'html':'','event':[]};
		if(typeof obj1 !== 'undefined' && typeof obj2 !== 'undefined') {
			out.html = obj1.html + obj2.html;

			out.events = obj1.events.concat(obj2.events);
		}

		return(out);
	},

	'_isArray':function(obj) {
		return Object.prototype.toString.call(obj) === '[object Array]';
	},
	
	'_transform':function(json, transform, options) {
		
		var elements = {'events':[],'html':''};
		

		if(jsonRender._isArray(json)) {
			
			var len=json.length;
			for(var j=0;j<len;++j) {	

				elements = jsonRender._append(elements,jsonRender._apply(json[j], transform, j, options));
			}

		} else if(typeof json === 'object') {

			elements = jsonRender._append(elements,jsonRender._apply(json, transform, undefined, options));
		}

		return(elements);		
	},

	'_apply':function(obj, transform, index, options) {

		var element = {'events':[],'html':''};
		
		if(jsonRender._isArray(transform)) {
			
			var t_len = transform.length;
			for(var t=0; t < t_len; ++t) {
				element = jsonRender._append(element,jsonRender._apply(obj, transform[t], index, options));
			}

		} else if(typeof transform === 'object') {
            
            var _element = '<>';
            
            if(transform[_element] === undefined) _element = 'tag';
            
			if( transform[_element] !== undefined ) {

				var name = jsonRender._getValue(obj,transform,_element,index);
                
				element.html += '<' + name;

				var children = {'events':[],'html':''};
				
				var html;

				for (var key in transform) {

					switch(key) {
						
						case 'tag':
						case '<>':
						break;
						case 'children':
						case 'html':

							var _transform = transform[key];

							if(jsonRender._isArray(_transform)) {
                                
								children = jsonRender._append(children,jsonRender._apply(obj, _transform, index, options));
							} else if(typeof _transform === 'function') {
								
								var temp = _transform.call(obj, obj, index);

								switch(typeof temp){

									case 'object':
										if(temp.html !== undefined && temp.events !== undefined) children = jsonRender._append(children,temp);
									break;
									case 'function':
									case 'undefined':
									break; 
									default:
										children.html += temp;
									break;
								}
							} else {

								html = jsonRender._getValue(obj,transform,key,index);
							}
						break;

						default:
							var isEvent = false;
							
							if( key.length > 2 )
								if(key.substring(0,2).toLowerCase() == 'on') {
									if(options.events) {
										var data = {
											'action':transform[key],
											'obj':obj,
											'data':options.eventData,
											'index':index
										};
										
										var id = jsonRender._guid();
										element.events[element.events.length] = {'id':id,'type':key.substring(2),'data':data};

										element.html += " jsonRender-event-id-"+key.substring(2)+"='" + id + "'";
									}
									isEvent = true;
								}

							if( !isEvent){
								var val = jsonRender._getValue(obj, transform, key, index);
								
                                if(val !== undefined) {
                                    var out;
                                    
                                    if(typeof val === 'string') out = '"' + val.replace(/"/g, '&quot;') + '"';
                                    else out = val;
                                    
                                    element.html += ' ' + key + '=' + out;
                                }
							}
						break;
					}
				}
			
				element.html += '>';
				
				if(html) element.html += html;

				element = jsonRender._append(element,children);

				element.html += '</' + name + '>';
			}
		}
		return(element);
	},

	'_guid':function() {
		var S4 = function() {
		   return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
		};
		return (S4()+S4()+"-"+S4()+S4()+"-"+S4()+S4());
	},

	'_getValue':function(obj, transform, key,index) {
		
		var out = '';
		
		var val = transform[key];
		var type = typeof val;
		
		if (type === 'function') {
			return(val.call(obj,obj,index));
		} else if (type === 'string') {
			var _tokenizer = new jsonRender._tokenizer([
				/\$\{([^\}\{]+)\}/
			],function( src, real, re ){
				return real ? src.replace(re,function(all,name){
					
					var components = name.split('.');
					var useObj = obj;
					var outVal = '';
					var c_len = components.length;
					for (var i=0;i<c_len;++i) {

						if( components[i].length > 0 ) {

							var newObj = useObj[components[i]];
							useObj = newObj;
							if(useObj === null || useObj === undefined) break;
						}
					}

					if(useObj !== null && useObj !== undefined) outVal = useObj;

					return(outVal);
				}) : src;
			});
			
			out = _tokenizer.parse(val).join('');
		} else {
			out = val;
		}

		return(out);
	},

	'_tokenizer':function( tokenizers, doBuild ){

		if( !(this instanceof jsonRender._tokenizer ) )
			return new jsonRender._tokenizer( tokenizers, doBuild );
			
		this.tokenizers = tokenizers.splice ? tokenizers : [tokenizers];
		if( doBuild )
			this.doBuild = doBuild;

		this.parse = function( src ){
			this.src = src;
			this.ended = false;
			this.tokens = [ ];
			do {
				this.next();
			} while( !this.ended );
			return this.tokens;
		};
		
		this.build = function( src, real ){
			if( src )
				this.tokens.push(
					!this.doBuild ? src :
					this.doBuild(src,real,this.tkn)
				);	
		};

		this.next = function(){
			var self = this,
				plain;
				
			self.findMin();
			plain = self.src.slice(0, self.min);
			
			self.build( plain, false );
				
			self.src = self.src.slice(self.min).replace(self.tkn,function( all ){
				self.build(all, true);
				return '';
			});
			
			if( !self.src )
				self.ended = true;
		};

		this.findMin = function(){
			var self = this, i=0, tkn, idx;
			self.min = -1;
			self.tkn = '';
			
			while(( tkn = self.tokenizers[i++]) !== undefined ){
				idx = self.src[tkn.test?'search':'indexOf'](tkn);
				if( idx != -1 && (self.min == -1 || idx < self.min )){
					self.tkn = tkn;
					self.min = idx;
				}
			}
			if( self.min == -1 )
				self.min = self.src.length;
		};
	}
};

(function($){	

    $.jsonRender = function(json, transform, _options) {

        if(typeof jsonRender === 'undefined') return(undefined);

        var options = {
            'output':'jsonRender'
        };

        if( _options !== undefined ) $.extend(options, _options);

		switch(options.output){

			case 'jsonRender':

				options.events = true;

				return(jsonRender.transform(json, transform, options));
			break;
			case 'html':
				options.events = false;
				
				return(jsonRender.transform(json, transform, options));
			break;
			case 'jquery':
				options.events = false;
				var $result = jsonRender_events(jsonRender.transform(json, transform, options));
				return($result);
			break;
		}
    };

	$.fn.jsonRender = function(json, transform, _options) {
		
        if(typeof jsonRender === 'undefined') return(undefined);
    
        var options = {
            'append':true,
            'replace':false,
            'prepend':false,
            'eventData':{}
        };
		
        if( _options !== undefined ) $.extend(options, _options);
        
        options.events = true;

        return this.each(function(){ 

            var $result = jsonRender_events(jsonRender.transform(json, transform, options));

            if (options.replace) $.fn.replaceWith.call($(this),$result);
            else if (options.prepend) $.fn.prepend.call($(this),$result);
            else $.fn.append.call($(this),$result);
        });
    };
})(jQuery);


function jsonRender_events(result) {

	var dom = $(document.createElement('i')).html(result.html);
	for(var i = 0; i < result.events.length; i++) {
		
		var event = result.events[i];
		
		var obj = $(dom).find("[jsonRender-event-id-"+event.type+"='" + event.id + "']");
		
		if(obj.length === 0) throw 'unable to attach event ' + event.id + ' to DOM';
		
		$(obj).removeAttr('jsonRender-event-id-'+event.type);
		
		$(obj).on(event.type,event.data,function(e){
			e.data.event = e;
			e.data.action.call($(this),e.data);
		});
	}

	return($(dom).children());
}