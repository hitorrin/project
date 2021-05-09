import classes from "./form.module.css";

const Form = () =>{
return(
    <article className={classes.main}>
  <h3 className={classes.header}>Добавление объявлений</h3>
    <div className={classes.formcontainer}>
    <form method="post" enctype="multipart/form-data">
        <input type="hidden" name="csrfmiddlewaretoken" value="c5jKVOR4O6GuJz0GPP4AYHKvUqZWF6HabUf8iKWdGzsWi0CVtWbxGEeKY9GB4E5z"/>
        <p><label  className={classes.formlabel} for="id_title">Товар:</label>   <input type="text" name="title" maxlength="250" required id="id_title" className={classes.form}></input></p>
<p><label  className={classes.formlabel} for="id_content">Описание:</label> <br></br>   <textarea name="content" cols="40" rows="10" required id="id_content">
</textarea></p>
<p><label  className={classes.formlabel} for="id_price">Цена:</label>   <input type="number" name="price" value="0" step="any" required id="id_price" className={classes.form}></input> </p>
<p><label  className={classes.formlabel} for="id_rubric">Рубрика:</label> <br></br>  <select name="rubric" required id="id_rubric" className={classes.select}>
  <option value="" selected>---------</option>

  <option value="5">Животные</option>

  <option value="6">Инструменты</option>

  <option value="3">Недвижимость</option>

  <option value="4">Техника</option>

  <option value="2">Транспорт</option>

  <option value="7">Услуги</option>

</select></p>
<p><label  className={classes.formlabel} for="id_image">Изображение:</label> <br></br> 
<input type="file"  name="image" accept="image/*" required id="id_image" className={classes.form_image}></input></p>
<p><label  className={classes.formlabel} for="id_phone">Мобильный телефон:</label>   <input type="text" name="phone" maxlength="20" required id="id_phone" className={classes.form}></input></p>
<p><label  className={classes.formlabel} for="id_place">Адрес:</label>   <input type="text" name="place" maxlength="80" required id="id_place" className={classes.form}></input>
<input type="hidden" name="author" value="вкек" id="id_author" className={classes.form}></input> </p>
      <div className={classes.buttonContainer}>  <input type="submit" value="Добавить"  className={classes.button}></input></div>
    </form>
    </div>
        </article>
)
}
export default Form;