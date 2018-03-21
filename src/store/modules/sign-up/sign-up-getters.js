const getters = {
    getAvailablePlans (state) {
        return state.availablePlans;
    },
    getCurrentPlan (state) {
        return state.currentPlan;
    },
    getCurrentStep (state) {
        return state.currentStep;
    },
    getAvailableSteps (state) {
        return state.availableSteps;
    },
    getFormValues (state) {
        return state.signUpFormValues;
    }
};

export default getters
