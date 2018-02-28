let [,, I, J, K] = process.argv;
console.log(I, J, K);

console.time('for of');
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
    for (const dep of newModule.dependencies) {
        if (dep.module) {
            for (const reason of dep.module.reasons) {
                if (reason.dependency === dep) reason.module = newModule;
            }
    	}
    }
}
console.timeEnd('for of');
