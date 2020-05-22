const removeTask = (e) => {
    // e.target.parentNode.remove();
    const index = e.target.dataset.key;
    console.log(document.querySelector(`li[data-key="${index}"]`));
}
document.querySelectorAll('li button').forEach(item => item.addEventListener('click', removeTask))