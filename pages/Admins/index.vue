<template>
  <form
    class="form-horizontal"
    style="  background-image: url('https://i.imgur.com/sMPnsa5.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;"
  >
    <fieldset>
      <legend>
        <span style="color: #ffffff;"><strong>Comentarios</strong></span>
      </legend>
      <!-- Text input-->
      <div class="form-group" style="text-align: left;">&nbsp;</div>
      <div class="form-group" style="text-align: left;">
        <span style="color: #ffffff;"
          ><strong
            ><label class="col-md-4 control-label" for="textinput"
              >NOMBRE</label
            ></strong
          ><img
            style="float: right;"
            src="~/static/logo.png"
            alt=""
            width="150"
            height="150"
        /></span>
        <div class="col-md-4">
          <input
            id="textinput"
            class="form-control input-md"
            name="textinput"
            required=""
            type="text"
            placeholder="Escriba su nombre u alias"
          />
        </div>
        <!-- Search input--><span style="color: #ffffff;">&nbsp;</span>
      </div>
      <div class="form-group" style="text-align: left;">
        <div class="form-group" style="text-align: left;">
          <span style="color: #ffffff;"
            ><strong
              ><label class="col-md-4 control-label" for="searchinput"
                >JUEGO:</label
              ></strong
            ></span
          >
          <div class="col-md-4">
            <input
              id="searchinput"
              class="form-control input-md"
              name="searchinput"
              required=""
              type="search"
              placeholder="Nombre juego dirigido el comentario"
            />
          </div>
          <div class="col-md-4">&nbsp;</div>
        </div>
        <!-- Text input-->
        <div class="form-group" style="text-align: left;">
          <span style="color: #ffffff;"
            ><label class="col-md-4 control-label" for="textinput"
              >Asunto:</label
            ></span
          >
          <div class="col-md-4" style="text-align: left;">
            <input
              id="textinput"
              class="form-control input-md"
              name="textinput"
              type="text"
              placeholder="Asunto"
            />
          </div>
          <div class="col-md-4" style="text-align: left;">&nbsp;</div>
          <div class="col-md-4" style="text-align: center;">
            <span style="color: #ffffff;">&nbsp;</span>
          </div>
        </div>
        <span style="color: #ffffff;"><!-- Textarea --></span>
        <div class="form-group" style="text-align: center;">
          <span style="color: #ffffff;"
            ><label class="col-md-4 control-label" for="textarea"
              >COMENTARIO:</label
            ></span
          >
          <div class="col-md-4">
            <textarea
              id="textarea"
              class="form-control"
              style="margin: 0px; height: 294px; width: 586px;"
              name="textarea"
            >
Escribe el comentario sobre el juego aqui</textarea
            >
          </div>
        </div>
        <!-- Button (Double) -->
        <div class="form-group">
          <label class="col-md-4 control-label" for="button1id"></label>
          <div class="col-md-8" style="text-align: center;">&nbsp;</div>
          <div class="col-md-8" style="text-align: center;">&nbsp;</div>
          <div class="col-md-8" style="text-align: center;">
            <button
              id="button1id"
              style="background:#FCF5F4; border: 2px solid #4CAF50"
              class="btn btn-success"
              name="button1id"
            >
              <strong>Enviar</strong>
            </button>
            <button
              id="button2id"
              class="btn btn-danger"
              style="background:#FCF5F4; border: 2px solid #D72808"
              name="button2id"
            >
              <strong>Descartar</strong>
            </button>
          </div>
        </div>
      </div>
    </fieldset>
  </form>
</template>

<script>
export default {};
</script>
