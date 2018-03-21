const state = {
    currentPlan: {},
    currentStep: 'PLAN_SELECTOR',
    availableSteps: ['PLAN_SELECTOR', 'FORM'],
    availablePlans: [
        {
            name: 'free',
            price: 0,
            serviceLimit: 1,
            alerts: 1,
            alertConditions: 1,
            duration: {
                value: 'unlimited'
            }
        }, {
            name: 'basic',
            price: '15.00',
            serviceLimit: 10,
            alerts: 5,
            alertConditions: 'unlimited',
            duration: {
                value: 1,
                unit: 'month'
            }
        }, {
            name: 'premium',
            price: '25.00',
            serviceLimit: 50,
            alerts: 'unlimited',
            alertConditions: 'unlimited',
            duration: {
                value: 1,
                unit: 'month'
            }
        }, {
            name: 'enterprise',
            price: '200.00',
            serviceLimit: 500,
            alerts: 'unlimited',
            alertConditions: 'unlimited',
            duration: {
                value: 1,
                unit: 'month'
            }
        }
    ],
    signUpFormValues: {
        userDetails: {
            email: '',
            firstName: '',
            familyName: '',
            password: '',
            passwordConfirmation: ''
        },
        companyDetails: {
            companyName: '',
            subdomain: '',
            agreement: false
        }
    }
};

export default state;
