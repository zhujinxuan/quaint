(function() {var implementors = {};
implementors["quaint"] = [{"text":"impl&lt;'a, V&gt; From&lt;V&gt; for DefaultValue&lt;'a&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Into&lt;Value&lt;'a&gt;&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Column&lt;'a&gt;&gt; for Expression&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a str&gt; for Column&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; From&lt;&amp;'a &amp;'b str&gt; for Column&lt;'b&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;String&gt; for Column&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T, C&gt; From&lt;(T, C)&gt; for Column&lt;'a&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Into&lt;Table&lt;'a&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Into&lt;Column&lt;'a&gt;&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Compare&lt;'a&gt;&gt; for ConditionTree&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Compare&lt;'a&gt;&gt; for Expression&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;ConditionTree&lt;'a&gt;&gt; for Expression&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Select&lt;'a&gt;&gt; for ConditionTree&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Delete&lt;'a&gt;&gt; for Query&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Row&lt;'a&gt;&gt; for Expression&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Function&lt;'a&gt;&gt; for Expression&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Raw&lt;'a&gt;&gt; for Expression&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Values&lt;'a&gt;&gt; for Expression&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;SqlOp&lt;'a&gt;&gt; for Expression&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; From&lt;T&gt; for Expression&lt;'a&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Into&lt;Value&lt;'a&gt;&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; From&lt;Vec&lt;T, Global&gt;&gt; for Expression&lt;'a&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Into&lt;Expression&lt;'a&gt;&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;ExpressionKind&lt;'a&gt;&gt; for Expression&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;RowNumber&lt;'a&gt;&gt; for Function&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;RowNumber&lt;'a&gt;&gt; for Expression&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Count&lt;'a&gt;&gt; for Function&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Count&lt;'a&gt;&gt; for Expression&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;AggregateToString&lt;'a&gt;&gt; for Function&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;AggregateToString&lt;'a&gt;&gt; for Expression&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Average&lt;'a&gt;&gt; for Function&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Average&lt;'a&gt;&gt; for Expression&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Sum&lt;'a&gt;&gt; for Function&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Sum&lt;'a&gt;&gt; for Expression&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Lower&lt;'a&gt;&gt; for Function&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Lower&lt;'a&gt;&gt; for Expression&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Upper&lt;'a&gt;&gt; for Function&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Upper&lt;'a&gt;&gt; for Expression&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Minimum&lt;'a&gt;&gt; for Function&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Minimum&lt;'a&gt;&gt; for Expression&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Maximum&lt;'a&gt;&gt; for Function&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Maximum&lt;'a&gt;&gt; for Expression&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; From&lt;T&gt; for IndexDefinition&lt;'a&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Into&lt;Column&lt;'a&gt;&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; From&lt;Vec&lt;T, Global&gt;&gt; for IndexDefinition&lt;'a&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Into&lt;Column&lt;'a&gt;&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Insert&lt;'a&gt;&gt; for Query&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;SingleRowInsert&lt;'a&gt;&gt; for Insert&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;MultiRowInsert&lt;'a&gt;&gt; for Insert&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;SingleRowInsert&lt;'a&gt;&gt; for Query&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;MultiRowInsert&lt;'a&gt;&gt; for Query&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; From&lt;T&gt; for JoinData&lt;'a&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Into&lt;Table&lt;'a&gt;&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; From&lt;T&gt; for Query&lt;'a&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Into&lt;Cow&lt;'a, str&gt;&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Select&lt;'a&gt;&gt; for SelectQuery&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Union&lt;'a&gt;&gt; for SelectQuery&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;SelectQuery&lt;'a&gt;&gt; for Query&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; From&lt;Vec&lt;T, Global&gt;&gt; for Row&lt;'a&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Into&lt;Expression&lt;'a&gt;&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, A&gt; From&lt;(A,)&gt; for Row&lt;'a&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Into&lt;Expression&lt;'a&gt;&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, A, B&gt; From&lt;(A, B)&gt; for Row&lt;'a&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Into&lt;Expression&lt;'a&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Into&lt;Expression&lt;'a&gt;&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, A, B, C&gt; From&lt;(A, B, C)&gt; for Row&lt;'a&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Into&lt;Expression&lt;'a&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Into&lt;Expression&lt;'a&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Into&lt;Expression&lt;'a&gt;&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, A, B, C, D&gt; From&lt;(A, B, C, D)&gt; for Row&lt;'a&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Into&lt;Expression&lt;'a&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Into&lt;Expression&lt;'a&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Into&lt;Expression&lt;'a&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Into&lt;Expression&lt;'a&gt;&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, A, B, C, D, E&gt; From&lt;(A, B, C, D, E)&gt; for Row&lt;'a&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Into&lt;Expression&lt;'a&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Into&lt;Expression&lt;'a&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Into&lt;Expression&lt;'a&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Into&lt;Expression&lt;'a&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Into&lt;Expression&lt;'a&gt;&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Select&lt;'a&gt;&gt; for Expression&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Select&lt;'a&gt;&gt; for Query&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a str&gt; for Table&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a String&gt; for Table&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;(&amp;'a str, &amp;'a str)&gt; for Table&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;(&amp;'a str, &amp;'a String)&gt; for Table&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;(&amp;'a String, &amp;'a str)&gt; for Table&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;(&amp;'a String, &amp;'a String)&gt; for Table&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;String&gt; for Table&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Vec&lt;Row&lt;'a&gt;, Global&gt;&gt; for Table&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Values&lt;'a&gt;&gt; for Table&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;(String, String)&gt; for Table&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Select&lt;'a&gt;&gt; for Table&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Union&lt;'a&gt;&gt; for Query&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Union&lt;'a&gt;&gt; for Expression&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Update&lt;'a&gt;&gt; for Query&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;i64&gt; for Value&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Option&lt;i64&gt;&gt; for Value&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;bool&gt; for Value&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Option&lt;bool&gt;&gt; for Value&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a str&gt; for Value&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Option&lt;&amp;'a str&gt;&gt; for Value&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;String&gt; for Value&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Option&lt;String&gt;&gt; for Value&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;usize&gt; for Value&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Option&lt;usize&gt;&gt; for Value&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;i32&gt; for Value&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Option&lt;i32&gt;&gt; for Value&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a [u8]&gt; for Value&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Option&lt;&amp;'a [u8]&gt;&gt; for Value&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;f64&gt; for Value&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Option&lt;f64&gt;&gt; for Value&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;f32&gt; for Value&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Option&lt;f32&gt;&gt; for Value&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;DateTime&lt;Utc&gt;&gt; for Value&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Option&lt;DateTime&lt;Utc&gt;&gt;&gt; for Value&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;NaiveTime&gt; for Value&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Option&lt;NaiveTime&gt;&gt; for Value&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;NaiveDate&gt; for Value&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Option&lt;NaiveDate&gt;&gt; for Value&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;BigDecimal&gt; for Value&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Option&lt;BigDecimal&gt;&gt; for Value&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Value&gt; for Value&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Option&lt;Value&gt;&gt; for Value&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Uuid&gt; for Value&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Option&lt;Uuid&gt;&gt; for Value&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, I, R&gt; From&lt;I&gt; for Values&lt;'a&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Iterator&lt;Item = R&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Into&lt;Row&lt;'a&gt;&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;&amp;'_ Error&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;FromSqlError&gt; for Error","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; From&lt;Option&lt;T&gt;&gt; for Name <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: ToString,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for ErrorKind","synthetic":false,"types":[]},{"text":"impl From&lt;ParseBigDecimalError&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;TryFromIntError&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;ParseError&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;ParseIntError&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;ParseBoolError&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;FromUtf8Error&gt; for Error","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()