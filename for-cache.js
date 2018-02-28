let [,, I, J, K] = process.argv;
console.log(I, J, K);

console.time('for cache');
for (let i = 0; i < I; i++) {
    let newModule = {
        dependencies: Array.from({ length: J }, () => {
            return {
                module: {
                    reasons: Array.from({ length: K }, () => {
                        return { };
                    })
                }
            };
        })
    };
    for (let j = 0; j < newModule.dependencies.length; j++) {
    	let dep = newModule.dependencies[j];
    	if (dep.module) {
    		let reasons = dep.module.reasons;
    		for (let k = 0; k < reasons.length; k++) {
    			let reason = reasons[k];
    			if (reason.dependency === dep) reason.module = newModule;
    		}
    	}
    }
}
console.timeEnd('for cache');
