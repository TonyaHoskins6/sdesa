<body onload="banner()">

<a name="ChangeBotton"><CENTER><H3>Изменяющаяся кнопка.</H3></CENTER></a><p>

<script language="JavaScript"><!--
// Hide this script from old browsers --

   var i = 0;
   var TextNumber = 0;
   var TextInput = new Object();
   var HelpText="";
   var Text = "";
   var Speed=300
   var WaitSpace="  "
TextInput[0] = "Чтобы запустить";
TextInput[1] = "Нажмите здесь";
TotalTextInput =1;
for (var addWait = 0; addWait <= TotalTextInput; addWait++)
   { TextInput[addWait]+=WaitSpace; }
var TimerId
var TimerSet=false;
function startBanner (form)
   {
   if (!TimerSet)
      {
      TimerSet=true;
      banner();
      }
   }
function banner()
   {
   Text=rollMessage();
   TimerId = setTimeout("banner()", Speed);
   document.form2.banner.value=Text;
   }
function rollMessage ()
   {
   Wait_yn=false;
   i++;
   var CheckSpace = HelpText.substring(i-1, i);
   CheckSpace = "" + CheckSpace;
   if (CheckSpace == " ")
      {i++;}
   if (i >= HelpText.length+1)
      {
      i=0;
      if (TextNumber < TotalTextInput)
         {TextNumber++;}
      else
         {TextNumber = 0;}
      initBanner();
      }
   Text = HelpText.substring(0, i);
   return (Text);
   }
function initBanner()
   {
   Text = TextInput[TextNumber];
   HelpText = Text;
startBanner ();
   }
function stopBanner()
   {
   TimerSet=false;
   clearTimeout (TimerId);
   }
function resetBanner()
   {
   TimerSet=false;
   clearTimeout (TimerId);
   TextNumber=0;
   i=0;
   Speed=300;
   document.form2.banner.value=" ";
   initBanner();
   }
// -- End Hiding Here
// --></script>

<form name="form2" action="/java/example.php">
 <input type="submit" name="banner" value=".....Подождите!.....">
</form>
