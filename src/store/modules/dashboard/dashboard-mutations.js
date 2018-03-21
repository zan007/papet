import footer from '../../../scenes/secure/components/footer/footer';

const mutations = {
    increment (state) {
        state.count++;
        state.widgets = [].concat(state.widgets, [{
            componentName: 'footer',
            component: footer
        }]);
    }
};

export default mutations;
