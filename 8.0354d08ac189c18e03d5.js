webpackJsonp([8],{23:function(e,r,a){var s=a(2);e.exports=function(){document.title="warnings",$(".page").html(a(49)({stats:s.stats,warnings:s.stats.warnings.map(function(e){e=e.split("\n");var r=e.shift(),a=e.pop();return/^ @/.test(a)||(e.push(a),a=""),{header:r,text:e.join("\n"),footer:a}})}))}},49:function(module,exports,__webpack_require__){var jade=__webpack_require__(3);module.exports=function anonymous(locals,attrs,escape,rethrow,merge){attrs=attrs||jade.attrs,escape=escape||jade.escape,rethrow=rethrow||jade.rethrow,merge=merge||jade.merge;var buf=[];with(locals||{}){0===warnings.length&&buf.push("<h2>No warnings.</h2>"),function(){if("number"==typeof warnings.length)for(var e=0,r=warnings.length;r>e;e++){var a=warnings[e];buf.push('<div class="alert alert-warning"><h4>');var s=a.header;buf.push(escape(null==s?"":s)),buf.push("</h4><pre>");var s=a.text;buf.push(escape(null==s?"":s)),buf.push("</pre><h5>");var s=a.footer;buf.push(escape(null==s?"":s)),buf.push("</h5></div>")}else{var r=0;for(var e in warnings){r++;var a=warnings[e];buf.push('<div class="alert alert-warning"><h4>');var s=a.header;buf.push(escape(null==s?"":s)),buf.push("</h4><pre>");var s=a.text;buf.push(escape(null==s?"":s)),buf.push("</pre><h5>");var s=a.footer;buf.push(escape(null==s?"":s)),buf.push("</h5></div>")}}}.call(this)}return buf.join("")}}});