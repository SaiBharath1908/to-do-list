function addTask(){
	let inputTask = document.getElementById("task")
	let list = document.getElementById("list")
	if(inputTask.value===""){
		alert("Enter the task")
		return
	}
	let listItem = document.createElement('li')
	listItem.innerText = inputTask.value
	
	let container = document.createElement('div')
	container.className = 'task'

	
	let deleteItem = document.createElement('button')
	deleteItem.innerText = 'Delete'
	deleteItem.onclick = function(){
		list.removeChild(listItem)
	}
	
	let complete = document.createElement('button')
	complete.innerText = 'complete'
	complete.onclick = function(){
		listItem.classList.toggle('complete')
	}
	
	container.append(deleteItem)
	container.append(complete)
	listItem.append(container)
	list.append(listItem)
	inputTask.value = ''
}