const mutations = {
    selectPlan (state, plan) {
        state.currentPlan = plan;
    },
    changeStep (state, step) {
        if (state.availableSteps.indexOf(step) !== -1) {
            state.currentStep = step;
        }
    },
    register (state, registerData) {
        state.signUpFormValues = registerData;
    }
};

export default mutations;
