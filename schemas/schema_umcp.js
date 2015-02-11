var schema = {
  'course': {
    'name': "<name>",
    'sections': {
      '<section>': {
        'location': "<location>",
        'meetings': {
            '<start_time>-<end_time>': ["<day1>", "<day2>"]
        },
        'instructor': {
        	'name': "<name>",
          'location': "<location>",
          'email': "<email>",
          'meetings': {
            '<start_time>-<end_time>': ["<day1>", "<day2>"]
        	}
      	}
      } 
    }
  }
};