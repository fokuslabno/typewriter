<!-- HEAD -->
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<!-- META TAGS -->
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta itemprop="description" content="Distraction free writing. Just you and your words.">
<meta property="og:description" content="Distraction free writing. Just you and your words.">
<meta itemprop="image" content="/res/img/promo-600x315.png">
<meta property="og:image" content="/res/img/promo-600x315.png">
<!-- META TAGS -->
<!-- EXT CSS -->
<link href="style.css" rel="stylesheet" type="text/css" media="screen" />
<link rel='stylesheet' href='//fonts.googleapis.com/css?family=Special+Elite' type='text/css' media='all' />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/balloon-css/0.4.0/balloon.min.css" />
<!-- EXT CSS -->
<!-- SCRIPT SRC -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
<!-- SCRIPT SRC -->
<!-- TITLE -->
<title>Online Typewriter</title>
<!-- TITLE -->
</head>
<!-- HEAD -->

<body>
<!-- TEXT INPUT -->
<textarea id="editor" onfocus="if (this.value=='Your story begins here...') this.value = ''">Your story begins here...</textarea>
<!-- TEXT INPUT -->

<!-- MENU -->
<div id="results">
Words: <span id="wordCount">0</span>,
Characters: <span id="charCount">0</span> - 
<a href="#" class="delete" data-balloon="New Document" data-balloon-pos="up">New Document</a> //
<a href="#" class="open" data-balloon="Open Document as TXT" data-balloon-pos="up">Open Document</a> // 
<a href="#" class="save" data-balloon="Download" data-balloon-pos="up">Download as TXT</a></li> //
<a href="#" class="pdf" data-balloon="Download as PDF" data-balloon-pos="up">Download as PDF</a></li> //
<a href="#" class="settings" data-balloon="Settings" data-balloon-pos="up">Settings</a></li>

</div>
<!-- MENU -->

<!-- HIDDEN DEFAULT -->
<div id="dialog-confirm">Are you sure you want to delete all text in the editor? This action cannot be undone!</div>
<div id="saveas">Filename to Save As: <input id="inputFileNameToSaveAs"></input></div>
<div id="loadfile">Select a File to Load: <input type="file" id="fileToLoad"></div>

<div id="settings">
<h2>Color mode</h2><br />
<input type="button" id="change_background" value="Sepia" /> <input type="button" id="white" value="White" /> <input type="button" id="black" value="Black" />
<h2>Font size</h2><br />
<input type="button" id="smallfont" value="Small" /> <input type="button" id="mediumfont" value="Medium" /> <input type="button" id="largefont" value="Large" />
</div>
<!-- HIDDEN DEFAULT -->


<!-- SCRIPT SRC -->
<script src="fokuslab.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.0.3/howler.min.js" async defer></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.27/pdfmake.min.js" async defer></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.27/vfs_fonts.js" async defer></script>
<!-- SCRIPT SRC -->

<!-- GOOGLE ANALYTICS -->

<!-- GOOGLE ANALYTICS -->
</body>
</html>