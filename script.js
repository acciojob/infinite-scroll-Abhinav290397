//your code here!
const ScrollContainer = document.querySelector("#infi-list");
let x=1;
function addTenElements(){
	for(let i=0;i<10;i++){
	const Li = document.createElement("li");
	Li.innerText = "Item"+" "+x;
	x++;
	ScrollContainer.appendChild("Li");
 }
}

ScrollContainer.addEventListener("scroll",() =>{
	const TotalScrollHt = ScrollContainer.scrollHeight;
	const visibleHt = ScrollContainer.clientHeight;
	const ScrolledHt = ScrollContainer.ScrollTop;
	const remainingHtToBeScrolled = TotalScrollHt - (visibleHt+ScrolledHt);
	if(remainingHtToBeScrolled < 4){
		addTenElements()
	}
});
addTenElements();
