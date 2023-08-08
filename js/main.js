
var  submitBtn = document.getElementById('submitBtn');
var  nameInput = document.getElementById('nameInput');
var  urlInput = document.getElementById('urlInput');
var  bodyItems = document.getElementById('bodyItems');
var  deleteBtn = document.getElementById('deleteBtn');
var  pNAlert = document.getElementById('pNAlert');
var  pUrlAlert = document.getElementById('pUrlAlert');

items = [];





if(localStorage.getItem('nameInput') != null){

items = JSON.parse(localStorage.getItem('nameInput'));
displayItem();
}






submitBtn.addEventListener('click', addItem)


function  addItem()  {
  

    if(validateNameItem()&&  validateUrlItem() && nameInput.value != '' && urlInput.value != '' ){


  


  var bookmark = {
  bookmarkName: nameInput.value,
  bookmarkUrl: urlInput.value,
  };
// alert(nameInput.value)
// alert(urlInput.value)

items.push(bookmark);
localStorage.setItem('nameInput', JSON.stringify(items))
// alert(items)
displayItem();
clr();

Swal.fire(
  'Good job!',
  'Bookmark Is right!',
  'success'
)



}else{

  pNAlert.classList.remove('d-none')
  pUrlAlert.classList.remove('d-none')
  urlInput.classList.add('is-invalid')


  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
  })


}



}





function  displayItem()  {

var container = '' ;

  for(var i = 0 ; i < items.length; i++){

    container +=

` <tr>
<td>${i + 1}</td>
<td>${items[i].bookmarkName}</td>
<td>
  
  <a href="${
    items[i].bookmarkUrl
  }" 

  target="_blank" class="btn btn-outline-dark btn-sm visitBtn fs-6">
  <i class="fa-solid fa-eye "></i>
      Visit
  </a>
</td>
<td>
  <button class="btn btn-outline-danger danger btn-sm fs-6" onclick = 'deleteItem(${i})'>
    
    <i class="fa-solid fa-trash"></i>
    Delete
  </button>
</td>
</tr> 

`
  }

  bodyItems.innerHTML = container;

}



function deleteItem(index){

// alert(index)


Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
    items.splice(index, 1)
localStorage.setItem('nameInput', JSON.stringify(items));

displayItem()

  }
})


}



function clr(){
  nameInput.value = '';
   urlInput.value = '';

}





function validateNameItem(){

  var regexName = /^[A-Za-z0-9_]{2,}[A-Za-z0-9_\s]{0,}$/gm;
  var pName = nameInput.value ; 

  if(regexName.test(pName)){



    nameInput.classList.remove('is-invalid')
    nameInput.classList.add('is-valid')
    pNAlert.classList.add('d-none')
  return true;
  
  }else{
    nameInput.classList.add('is-invalid')
    pNAlert.classList.remove('d-none')
    return false;
  }
  
  

  }










  function validateUrlItem(){

  var regexUrl = /^(https:\/\/){0,1}[a-zA-Z0-9_?\/]{1,}\.[a-zA-Z0-9_?\/]{2,}$/gm;
  var pUrl = urlInput.value ; 

    if(regexUrl.test(pUrl)){
  
  
  
      urlInput.classList.add('is-valid')
      urlInput.classList.remove('is-invalid')
      pUrlAlert.classList.add('d-none')
    return true;
    
    }else{
      urlInput.classList.add('is-invalid')
      pUrlAlert.classList.remove('d-none')
      return false;
    }
    
    
  
    }
  
  
    nameInput.addEventListener('keyup', validateNameItem);
    urlInput.addEventListener('keyup', validateUrlItem);

    

var shadyBtn = document.getElementById('shadyBtn');









