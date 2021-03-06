// let bBtn = document.querySelectorAll("button")
// bBtn.classList.add("btn btn-primary")
	const trainingDataForm = document.querySelector('#trainingData')
	trainingDataForm.onsubmit = addLearningData
	
		function  addLearningData(e){
			e.preventDefault()
			// if xs data not in session storage, create xs data
			if(!sessionStorage.getItem('xs')){
				sessionStorage.setItem('xs', JSON.stringify([]))
			}
			// if ys data not in session storage, create ys 
			if(!sessionStorage.getItem('ys')){
				sessionStorage.setItem('ys', JSON.stringify([]))
			}
			
			// get data from inputs
			let x = Number(document.querySelector('#productqty').value)
			let y = Number(document.querySelector('#price').value)
			
			// add x and y data to corresponding arrays
			const xs = JSON.parse(sessionStorage.getItem('xs'))
			const ys = JSON.parse(sessionStorage.getItem('ys'))
			xs.push(x)
			ys.push(y)
			
			// visualize data
			console.log(xs, ys)
			// update session storage
			
			sessionStorage.setItem('xs', JSON.stringify(xs))
			sessionStorage.setItem('ys', JSON.stringify(ys))
			alert('data saved successfully')
			
		}
		
		// predictPrice
		let predictPriceForm = document.querySelector('#predictPriceForm')
		predictPriceForm.onsubmit = makePrediction
		
		// make prediction 
		function makePrediction(e){
			e.preventDefault()
			// make sure fhere is enough learning data to predict price
			let xs = JSON.parse(sessionStorage.getItem('xs')) || []
			let ys = JSON.parse(sessionStorage.getItem('ys')) || []
			if(xs.length < 2 && ys.length < 2){
				alert('not enough learning data')
				return
			}
			// if there is enough learning data, predict price
			else{
				predictPrice(xs, ys)
			}
		}
	
		function predictPrice(xs, ys){
			let pPRICE = (document.querySelector("#predict").value)
		console.log(pPRICE)
			let count = 0
			let Exs = 0
			let Eys = 0
			let ExsSQUARE = 0
			let varONE = 0
			// debugger
			// Given an array of learning, makes prediction of price
			for(i=0;i<xs.length;i++){
				varONE += (xs[i]*ys[i])
				count +=1
				 Exs +=xs[i]
				 Eys +=ys[i]
				 console.log(ys[i])
				 ExsSQUARE += xs[i]**2



			}
			console.log(varONE)
			console.log(Exs)
			console.log(Eys)
			console.log(ExsSQUARE)

			let ExsExy = Exs*Eys
			console.log(ExsExy)
			let mainVarOne = count*varONE
			console.log(mainVarOne)
			let sNum = mainVarOne -ExsExy
			console.log(sNum)
			let nExsSQUARE = count*ExsSQUARE
			console.log(nExsSQUARE)
			let xsSumSquare = Exs**2

			let sDen =nExsSQUARE-xsSumSquare
			let slope = sNum/sDen
			console.log(sNum)
			console.log(sDen)
			console.log(slope)
			
			let intercept = (Eys-(slope*Exs))/count
			console.log(intercept)
			let pP =intercept+(pPRICE*slope)
			console.log(pPRICE)
			let pDiv = document.querySelector("#answer")
			pDiv.innerHTML= `predicted price is ${pP}`}


			const viewStoredData = document.querySelector("#viewStoredData")
        viewStoredData.onclick = e => {
            // Try accessing data from session Storage
            let xs = JSON.parse(sessionStorage.getItem("xs")) || []
            let ys = JSON.parse(sessionStorage.getItem("ys")) || []

            // if no data found
            if(xs.length < 1){
                let msg = "No training data recorded"
                let viewData = document.querySelector("#viewData")
                viewData.innerHTML = msg
                return
            }

            // if data is found

            let table = document.createElement("table")
            table.innerHTML = `<thead>
                <tr>
                    <th>Product Quantity</th>
                    <th>Price for Quantity</th>
                </tr>
                    
                </thead>`
            
                // loop through xs and ys and populate table with data
                for(let idx=0; idx < xs.length; idx+=1){
                    let x = xs[idx]
                    let y = ys[idx]
                    let tr = document.createElement("tr")
                    tr.innerHTML = `
                        <td>${x}</td>
                        <td>${y}</td>
                    `
                    table.append(tr)
                }

                // add table to DOM
                let viewData = document.querySelector("#viewData")
                viewData.innerHTML = ""
                viewData.append(table)


        }
		
			





