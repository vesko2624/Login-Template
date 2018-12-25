for(let i of document.querySelectorAll('.field-group')){
    const input = i.querySelector('input'); 
    const label = i.querySelector('label');
    const input_class = input.classList;
    const label_class = label.classList;
    input.onfocus = () => {
        label_class.add('label-focused');
    };
    input.onblur = () => {
        if(!input.value) {
            label_class.remove('label-focused');
            input_class.remove('valid');
            input_class.remove('invalid');
        }else{
            if(input.validity.valid){
                input_class.remove('invalid');
                input_class.add('valid');
            }
            else{
                input_class.remove('valid');
                input_class.add('invalid');
            }
        }
    };
    
}