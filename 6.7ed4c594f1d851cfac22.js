webpackJsonp([6],{1:function(u,e){u.exports=function(u){return 2048>u?u+" bytes":(u/=1024,2048>u?Math.round(u)+" KiB":(u/=1024,Math.round(u)+" MiB"))}},17:function(u,e,s){var t=s(2),a=s(4);u.exports=function(){document.title="hints";var u=[];t.stats.modules.forEach(function(e){var s={};e.dependencies.forEach(function(u){s[u.moduleId]?s[u.moduleId].count++:s[u.moduleId]={module:e,count:1,otherModule:a(t.stats.modules,u.moduleId)}}),Object.keys(s).forEach(function(e){var t=s[e];t.count>=2&&u.push(t)})}),u.forEach(function(u){var e=(u.otherModule.id+"").length;u.saving=u.count*(2+e)-6-e}),u=u.filter(function(u){return u.saving>10}),u.sort(function(u,e){return e.saving-u.saving});var e=[];t.stats.modules.forEach(function(u){u.chunks.length>=2&&e.push({module:u,count:u.chunks.length,saving:(u.chunks.length-1)*u.size})}),e=e.filter(function(u){return u.saving>100}),e.sort(function(u,e){return e.saving-u.saving});var h=t.stats.modules.filter(function(u){return"number"==typeof u.timestamp}).sort(function(u,e){return e.timestamp-u.timestamp}).slice(0,10),n=h.map(function(u){for(var e=[u];"number"==typeof u.issuerUid&&(u=t.mapModulesUid[u.issuerUid]);)e.unshift(u);return e});$(".page").html(s(43)({stats:t.stats,multiRefs:u,multiChunks:e,longChains:n}))}},43:function(module,exports,__webpack_require__){var jade=__webpack_require__(3);module.exports=function anonymous(locals,attrs,escape,rethrow,merge){attrs=attrs||jade.attrs,escape=escape||jade.escape,rethrow=rethrow||jade.rethrow,merge=merge||jade.merge;var buf=[];with(locals||{}){buf.push('<div class="container-fluid"><div class="row"><div class="col-md-12">'),0===multiChunks.length&&0===multiRefs.length&&0===longChains.length&&buf.push("<h2>Everything seem to be fine.</h2>"),multiChunks.length>0&&(buf.push('<h2>Module in multiple chunks</h2><p>Check if it is a good idea to move modules into a common parent. You may want to use <code>require.include</code> or insert them into the parents <code>require.ensure</code> array.</p><table class="table table-bordered"><thead><tr><th>module</th><th>name</th><th>count</th><th>chunks</th><th>saving</th></tr></thead><tbody>'),function(){if("number"==typeof multiChunks.length)for(var u=0,e=multiChunks.length;e>u;u++){var s=multiChunks[u];if(buf.push("<tr><td>"),"number"==typeof s.module.uid){buf.push("<a"),buf.push(attrs({href:"#module/"+s.module.uid,"class":"btn btn-success"},{href:!0})),buf.push(">");var t=s.module.id;buf.push(escape(null==t?"":t)),buf.push("</a>")}else{buf.push('<span class="btn btn-success">');var t=s.module.id;buf.push(escape(null==t?"":t)),buf.push("</span>")}buf.push("</td>");var a=s.module.name.split("!");buf.push("<td><pre><code>");var t=a.join("\n");buf.push(escape(null==t?"":t)),buf.push("</code></pre></td><td>");var t=s.count;buf.push(escape(null==t?"":t)),buf.push("</td><td>"),function(){if("number"==typeof s.module.chunks.length)for(var u=0,e=s.module.chunks.length;e>u;u++){var t=s.module.chunks[u];if(u>0){var a=" ";buf.push(escape(null==a?"":a))}buf.push("<a"),buf.push(attrs({href:"#chunk/"+t,"class":"btn btn-info"},{href:!0})),buf.push(">");var a=t;buf.push(escape(null==a?"":a)),buf.push("</a>")}else{var e=0;for(var u in s.module.chunks){e++;var t=s.module.chunks[u];if(u>0){var a=" ";buf.push(escape(null==a?"":a))}buf.push("<a"),buf.push(attrs({href:"#chunk/"+t,"class":"btn btn-info"},{href:!0})),buf.push(">");var a=t;buf.push(escape(null==a?"":a)),buf.push("</a>")}}}.call(this),buf.push("</td><td>");var t=__webpack_require__(1)(s.saving);buf.push(escape(null==t?"":t)),buf.push("</td></tr>")}else{var e=0;for(var u in multiChunks){e++;var s=multiChunks[u];if(buf.push("<tr><td>"),"number"==typeof s.module.uid){buf.push("<a"),buf.push(attrs({href:"#module/"+s.module.uid,"class":"btn btn-success"},{href:!0})),buf.push(">");var t=s.module.id;buf.push(escape(null==t?"":t)),buf.push("</a>")}else{buf.push('<span class="btn btn-success">');var t=s.module.id;buf.push(escape(null==t?"":t)),buf.push("</span>")}buf.push("</td>");var a=s.module.name.split("!");buf.push("<td><pre><code>");var t=a.join("\n");buf.push(escape(null==t?"":t)),buf.push("</code></pre></td><td>");var t=s.count;buf.push(escape(null==t?"":t)),buf.push("</td><td>"),function(){if("number"==typeof s.module.chunks.length)for(var u=0,e=s.module.chunks.length;e>u;u++){var t=s.module.chunks[u];if(u>0){var a=" ";buf.push(escape(null==a?"":a))}buf.push("<a"),buf.push(attrs({href:"#chunk/"+t,"class":"btn btn-info"},{href:!0})),buf.push(">");var a=t;buf.push(escape(null==a?"":a)),buf.push("</a>")}else{var e=0;for(var u in s.module.chunks){e++;var t=s.module.chunks[u];if(u>0){var a=" ";buf.push(escape(null==a?"":a))}buf.push("<a"),buf.push(attrs({href:"#chunk/"+t,"class":"btn btn-info"},{href:!0})),buf.push(">");var a=t;buf.push(escape(null==a?"":a)),buf.push("</a>")}}}.call(this),buf.push("</td><td>");var t=__webpack_require__(1)(s.saving);buf.push(escape(null==t?"":t)),buf.push("</td></tr>")}}}.call(this),buf.push("</tbody></table>")),multiRefs.length>0&&(buf.push('<h2>Multiple references to the same module</h2><p>Refactor this:</p><pre><code>var a = require("xyz").a;\nvar b = require("xyz").b;\nvar c = require("xyz").c;</code></pre><p>To this:</p><pre><code>var xyz = require("xyz");\nvar a = xyz.a;\nvar a = xyz.b;\nvar c = xyz.c;</code></pre><table class="table table-bordered"><thead><tr><th>module</th><th>name</th><th>count</th><th>referenced module</th><th>referenced name</th><th>saving</th></tr></thead><tbody>'),function(){if("number"==typeof multiRefs.length)for(var u=0,e=multiRefs.length;e>u;u++){var s=multiRefs[u];if(buf.push("<tr><td>"),"number"==typeof s.module.uid){buf.push("<a"),buf.push(attrs({href:"#module/"+s.module.uid,"class":"btn btn-success"},{href:!0})),buf.push(">");var t=s.module.id;buf.push(escape(null==t?"":t)),buf.push("</a>")}else{buf.push('<span class="btn btn-success">');var t=s.module.id;buf.push(escape(null==t?"":t)),buf.push("</span>")}buf.push("</td><td><pre><code>");var t=s.module.name.split("!").join("\n");buf.push(escape(null==t?"":t)),buf.push("</code></pre></td><td>");var t=s.count;if(buf.push(escape(null==t?"":t)),buf.push("</td><td>"),"number"==typeof s.otherModule.uid){buf.push("<a"),buf.push(attrs({href:"#module/"+s.otherModule.uid,"class":"btn btn-success"},{href:!0})),buf.push(">");var t=s.otherModule.id;buf.push(escape(null==t?"":t)),buf.push("</a>")}else{buf.push('<span class="btn btn-success">');var t=s.otherModule.id;buf.push(escape(null==t?"":t)),buf.push("</span>")}buf.push("</td><td><pre><code>");var t=s.otherModule.name.split("!").join("\n");buf.push(escape(null==t?"":t)),buf.push("</code></pre></td><td>");var t=__webpack_require__(1)(s.saving)+"+";buf.push(escape(null==t?"":t)),buf.push("</td></tr>")}else{var e=0;for(var u in multiRefs){e++;var s=multiRefs[u];if(buf.push("<tr><td>"),"number"==typeof s.module.uid){buf.push("<a"),buf.push(attrs({href:"#module/"+s.module.uid,"class":"btn btn-success"},{href:!0})),buf.push(">");var t=s.module.id;buf.push(escape(null==t?"":t)),buf.push("</a>")}else{buf.push('<span class="btn btn-success">');var t=s.module.id;buf.push(escape(null==t?"":t)),buf.push("</span>")}buf.push("</td><td><pre><code>");var t=s.module.name.split("!").join("\n");buf.push(escape(null==t?"":t)),buf.push("</code></pre></td><td>");var t=s.count;if(buf.push(escape(null==t?"":t)),buf.push("</td><td>"),"number"==typeof s.otherModule.uid){buf.push("<a"),buf.push(attrs({href:"#module/"+s.otherModule.uid,"class":"btn btn-success"},{href:!0})),buf.push(">");var t=s.otherModule.id;buf.push(escape(null==t?"":t)),buf.push("</a>")}else{buf.push('<span class="btn btn-success">');var t=s.otherModule.id;buf.push(escape(null==t?"":t)),buf.push("</span>")}buf.push("</td><td><pre><code>");var t=s.otherModule.name.split("!").join("\n");buf.push(escape(null==t?"":t)),buf.push("</code></pre></td><td>");var t=__webpack_require__(1)(s.saving)+"+";buf.push(escape(null==t?"":t)),buf.push("</td></tr>")}}}.call(this),buf.push("</tbody></table>")),longChains.length>0&&(buf.push("<h2>Long module build chains</h2><p>Use prefetching to increase build performance. Prefetch a module from the middle of the chain.</p>"),function(){if("number"==typeof longChains.length)for(var u=0,e=longChains.length;e>u;u++){var s=longChains[u];buf.push('<table class="table table-bordered"><thead><tr><th>module</th><th>name</th><th>time</th><th>finished @</th></tr></thead><tbody>'),function(){if("number"==typeof s.length)for(var u=0,e=s.length;e>u;u++){var t=s[u];if(buf.push("<tr><td>"),"number"==typeof t.uid){buf.push("<a"),buf.push(attrs({href:"#module/"+t.uid,"class":"btn btn-success"},{href:!0})),buf.push(">");var a=t.id;buf.push(escape(null==a?"":a)),buf.push("</a>")}else{buf.push('<span class="btn btn-success">');var a=t.id;buf.push(escape(null==a?"":a)),buf.push("</span>")}buf.push("</td><td><pre><code>");var a=t.name.split("!").join("\n");buf.push(escape(null==a?"":a)),buf.push("</code></pre></td><td>");var a=t.time+" ms";buf.push(escape(null==a?"":a)),buf.push("</td><td>");var a=t.timestamp+" ms";buf.push(escape(null==a?"":a)),buf.push("</td></tr>")}else{var e=0;for(var u in s){e++;var t=s[u];if(buf.push("<tr><td>"),"number"==typeof t.uid){buf.push("<a"),buf.push(attrs({href:"#module/"+t.uid,"class":"btn btn-success"},{href:!0})),buf.push(">");var a=t.id;buf.push(escape(null==a?"":a)),buf.push("</a>")}else{buf.push('<span class="btn btn-success">');var a=t.id;buf.push(escape(null==a?"":a)),buf.push("</span>")}buf.push("</td><td><pre><code>");var a=t.name.split("!").join("\n");buf.push(escape(null==a?"":a)),buf.push("</code></pre></td><td>");var a=t.time+" ms";buf.push(escape(null==a?"":a)),buf.push("</td><td>");var a=t.timestamp+" ms";buf.push(escape(null==a?"":a)),buf.push("</td></tr>")}}}.call(this),buf.push("</tbody></table>")}else{var e=0;for(var u in longChains){e++;var s=longChains[u];buf.push('<table class="table table-bordered"><thead><tr><th>module</th><th>name</th><th>time</th><th>finished @</th></tr></thead><tbody>'),function(){if("number"==typeof s.length)for(var u=0,e=s.length;e>u;u++){var t=s[u];if(buf.push("<tr><td>"),"number"==typeof t.uid){buf.push("<a"),buf.push(attrs({href:"#module/"+t.uid,"class":"btn btn-success"},{href:!0})),buf.push(">");var a=t.id;buf.push(escape(null==a?"":a)),buf.push("</a>")}else{buf.push('<span class="btn btn-success">');var a=t.id;buf.push(escape(null==a?"":a)),buf.push("</span>")}buf.push("</td><td><pre><code>");var a=t.name.split("!").join("\n");buf.push(escape(null==a?"":a)),buf.push("</code></pre></td><td>");var a=t.time+" ms";buf.push(escape(null==a?"":a)),buf.push("</td><td>");var a=t.timestamp+" ms";buf.push(escape(null==a?"":a)),buf.push("</td></tr>")}else{var e=0;for(var u in s){e++;var t=s[u];if(buf.push("<tr><td>"),"number"==typeof t.uid){buf.push("<a"),buf.push(attrs({href:"#module/"+t.uid,"class":"btn btn-success"},{href:!0})),buf.push(">");var a=t.id;buf.push(escape(null==a?"":a)),buf.push("</a>")}else{buf.push('<span class="btn btn-success">');var a=t.id;buf.push(escape(null==a?"":a)),buf.push("</span>")}buf.push("</td><td><pre><code>");var a=t.name.split("!").join("\n");buf.push(escape(null==a?"":a)),buf.push("</code></pre></td><td>");var a=t.time+" ms";buf.push(escape(null==a?"":a)),buf.push("</td><td>");var a=t.timestamp+" ms";buf.push(escape(null==a?"":a)),buf.push("</td></tr>")}}}.call(this),buf.push("</tbody></table>")}}}.call(this)),buf.push("</div></div></div>")}return buf.join("")}}});