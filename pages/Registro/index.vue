<template>
    <modal name="coño">
<div class="bg-white  shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col text-black "   style=" border: 10px solid white; margin-top: 50px; background-color: Black;">
    <div class="mb-4 justify-between">
     <img
            style="float: right;"
            src="~/static/logo.png"
            alt=""
            width="125"
            height="125"
        />
        <label class="block text-white text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-50 py-2 px-3 text-grey-darker" style="width: 500px;" id="username"  type="text" placeholder="Username">

      <label class="block text-white text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-red rounded w-50 py-2 px-3 text-grey-darker mb-3"  style="width: 500px;" id="password"  type="password" placeholder="******************">
      
      <label class="block text-white text-sm font-bold mb-2" for="password">
        Password again
      </label>
      <input class="shadow appearance-none border border-red rounded w-50 py-2 px-3 text-grey-darker mb-3"  style="width: 500px;" id="Confirmation"  type="password" placeholder="******************">
      

      <label class="block text-white text-sm font-bold mb-2" for="username">
        E-mail
      </label>
      <input class="shadow appearance-none border rounded w-50 py-2 px-3 text-grey-darker" style="width: 500px;" id="E-mail"  type="text" placeholder="E-mail">
    </div>
      <div class="flex items-center ">          
     <input type="checkbox" id="accept" name="check" value="Accept">
      <label Class="text-white" for="check" >Accept our terms</label><br>
    </div>
    <div class="flex items-center ">
      <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"  type="button"  style=" border: 5px solid #CCCCCC;">
        Register
      </button>
    <label class="block text-white text-sm font-bold mb-0" style="margin-left:10px;" for="password">
       You have an account?
       <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="/Login">
       Login
      </a>
       </label>
      <a class="inline-block align-baseline font-bold mb-0 text-sm text-blue hover:text-blue-darker" style="margin-left:920px;" href="#">
        Help?
      </a>
    </div>
</div>
    </modal>
</template>

<script>

</script>