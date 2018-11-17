/**
 * Copyright © 2017 Alexander Gjøsund
 * All Rights Reserved
 **/

//play sound on keypress using howler.js
$( "#editor" ).keypress(function() {
var sound = new Howl({
  src: ['/res/sound/typewriter.wav']
});
sound.play();
});

//make pdf on click

jQuery(".pdf").on( "click", function(e) {
		    	e.preventDefault();
    	pdfmake();
    	console.log("pdfmake");
    	});

//create pdf
function pdfmake() {
 var docDefinition = { content: document.getElementById("editor").value };
 pdfMake.createPdf(docDefinition).download('document.pdf');
}

    jQuery(".settings").on( "click", function(e) {
    	e.preventDefault();
jQuery( "#settings" ).dialog({
      resizable: false,
      height: "auto",
      width: 400,
      modal: true,
      buttons: {
        "Apply Settings": function() {
          jQuery( this ).dialog( "close" );
          jQuery("#editor").first().css("background","#F4EAD5");
          jQuery("#editor").first().css("color","#333");
        },
        Cancel: function() {
          jQuery( this ).dialog( "close" );
        }
      }
    });
    });

//count word

counter = function() {
    var value = $('#editor').val();

    if (value.length == 0) {
        $('#wordCount').html(0);
        $('#charCount').html(0);
        return;
    }

    var regex = /\s+/gi;
    var wordCount = value.trim().replace(regex, ' ').split(' ').length;
    var charCount = value.trim().length;

    $('#wordCount').html(wordCount);
    $('#charCount').html(charCount);
};

$(document).ready(function() {
    $('#editor').change(counter);
    $('#editor').keydown(counter);
    $('#editor').keypress(counter);
    $('#editor').keyup(counter);
    $('#editor').blur(counter);
    $('#editor').focus(counter);
});

//delete contents of textarea

jQuery(".delete").on("click", function(e) {
e.preventDefault();
jQuery( "#dialog-confirm" ).dialog({
      resizable: false,
      height: "auto",
      width: 400,
      modal: true,
      buttons: {
        "Yes": function() {
          jQuery( this ).dialog( "close" );
          jQuery('#editor').val('');
        },
        No: function() {
          jQuery( this ).dialog( "close" );
        }
      }
    });

});

//save textarea content to file

    jQuery('.save').on('click', function(b){
        b.preventDefault(); //hindre link i å utføre standard handling
		saveTextAsFile();
});

//load file to textarea
    jQuery('.open').on('click', function(b){
        b.preventDefault(); //hindre link i å utføre standard handling
        jQuery( "#loadfile" ).dialog({
      resizable: false,
      height: "auto",
      width: 400,
      modal: true,
      buttons: {
        "Load selected file": function() {
          jQuery( this ).dialog( "close" );
          loadFileAsText();
        },
        Cancel: function() {
          jQuery( this ).dialog( "close" );
        }
      }
    });

});

function saveTextAsFile()
{
	var textToWrite = document.getElementById("editor").value;
	var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
	var fileNameToSaveAs = "document.txt";

	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.innerHTML = "Download File";
	if (window.webkitURL != null)
	{
		// Chrome allows the link to be clicked
		// without actually adding it to the DOM.
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	}
	else
	{
		// Firefox requires the link to be added to the DOM
		// before it can be clicked.
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}

	downloadLink.click();
}

function destroyClickedElement(event)
{
	document.body.removeChild(event.target);
}

function loadFileAsText()
{
	var fileToLoad = document.getElementById("fileToLoad").files[0];

	var fileReader = new FileReader();
	fileReader.onload = function(fileLoadedEvent) 
	{
		var textFromFileLoaded = fileLoadedEvent.target.result;
		document.getElementById("editor").value = textFromFileLoaded;
	};
	fileReader.readAsText(fileToLoad, "UTF-8");
}