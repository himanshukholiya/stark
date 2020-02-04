
function submitBtn()
{
	var val = document.getElementById("txt");  //value getting
	var a = document.getElementById("zz");    //getting div
		//var inp = document.createTextNode();
             

             var para = document.createElement('P');   
             para.setAttribute('class', 'pr');                    
             var t = document.createTextNode(val.value);      
             var x = para.appendChild(t);        
	


var button = document.createElement('input');

       
        button.setAttribute('type', 'button');
        button.setAttribute('value', 'Delete');
        button.setAttribute('class', 'i');   //delete button "class i"

      
       button.setAttribute('onclick', 'Remove()');

        a.appendChild(x);
        a.appendChild(button);

    var x = document.createElement("BR");

       a.appendChild(x);
    }

  function Remove()
    {
    	 var myobj = document.getElementById('zz');
         myobj.remove();
    }