const removeTask = (e) => {
    const index = e.target.dataset.key;
    console.log(index);
    console.log(document.querySelector(`li[data-key="${index}"]`));
}

document.querySelectorAll('button').forEach(item => item.addEventListener('click', removeTask))