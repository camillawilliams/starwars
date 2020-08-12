const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			people: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getPlanets: () => {
				fetch("https://swapi.dev/api/planets/")
					.then(res => res.json())
					.then(data => setStore({ planets: data.results })); //planets is the key set store = function () {}=object data is the value
				//[] =array ""=string

				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getPeople: () => {
				fetch("https://swapi.dev/api/people/")
					.then(res => res.json())
					.then(data => setStore({ people: data.results }));
			}
		}
	};
};

export default getState;
