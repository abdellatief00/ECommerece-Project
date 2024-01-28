let search = document.querySelector("input[name=searchByName]");
    search.addEventListener("input", searching);

    function searching(e) {
        //  console.log(e);
        let tr = document.querySelectorAll("tbody tr");
        for (let i = 0; i < tr.length; i++) {
            let node = tr[i];
            let textContent = node.children[2].textContent.toLowerCase();
            let show = textContent.indexOf(this.value.toLowerCase()) !== -1;
            node.style.display = show ? "" : "none";
        }
    }

