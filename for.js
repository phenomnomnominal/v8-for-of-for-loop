let [,, I, J, K] = process.argv;
console.log(I, J, K);

console.time('for');
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
    		for (let k = 0; k < dep.module.reasons.length; k++) {
    			let reason = dep.module.reasons[k];
    			if (reason.dependency === dep) reason.module = newModule;
    		}
    	}
    }
}
console.timeEnd('for');
