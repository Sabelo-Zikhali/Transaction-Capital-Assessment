
(function($) {

	var	$window = $(window),
		$banner = $('#banner'),
		$body = $('body');


		breakpoints({
			default:   ['1681px',   null       ],
			xlarge:    ['1281px',   '1680px'   ],
			large:     ['981px',    '1280px'   ],
			medium:    ['737px',    '980px'    ],
			small:     ['481px',    '736px'    ],
			xsmall:    ['361px',    '480px'    ],
			xxsmall:   [null,       '360px'    ]
		});

	
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				target: $body,
				visibleClass: 'is-menu-visible',
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right'
			});

})(jQuery);


  // Claims Form validation code .
  function Claim() {
                var name = 
                    document.forms["RegForm"]["name"];
                var last_name = 
                    document.forms["RegForm"]["last_name"];
                var email = 
                    document.forms["RegForm"]["email"];
                var number = 
                    document.forms["RegForm"]["number"];
                var date = 
                    document.forms["RegForm"]["date"];
  
                if (name.value == "") {
                    window.alert("Please enter your First Name.");
                    name.focus();
                    return false;
                }
  
                if (last_name.value == "") {
                    window.alert("Please enter your Last Name.");
                    last_name.focus();
                    return false;
                }
  
                if (email.value == "") {
                    window.alert(
                      "Please enter a valid e-mail address.");
                    email.focus();
                    return false;
                }
  
                if (number.value == "") {
                    window.alert(
                      "Please enter your telephone number.");
                    number.focus();
                    return false;
                }
  
                if (date.value == "") {
                    window.alert("Please enter your date");
                    date.focus();
                    return false;
                }
  
                return true;
}

// Quote Form validation code .
  function QuoteForm() {
                var age = 
                    document.forms["QuoteForm"]["age"];
                var gender = 
                    document.forms["QuoteForm"]["gender"];
                var amount = 
                    document.forms["QuoteForm"]["amount"];
  
                if (age.value == "") {
                    window.alert("Please enter your age.");
                    age.focus();
                    return false;
                }
  
                if (gender.value == "") {
                    window.alert("Please select you gender.");
                    gender.focus();
                    return false;
                }
  
                if (amount.value == "") {
                    window.alert(
                      "Please select you amount.");
                    amount.focus();
                    return false;
                }
                return true;
}