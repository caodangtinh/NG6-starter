function EntityService() {
    "ngInject"

    const entities = [
        {
            name: "Arrivals",
            car: "BPM",
            status: '0'
        },
        {
            name: "Car Wash",
            car: "BPM",
            status: '0'
        },
        {
            name: "Maintenance",
            car: "Project",
            status: '0'
        },
        {
            name: "Customer Payment",
            car: "BPM",
            status: '0'
        },
        {
            name: "Technical Issues",
            car: "Project",
            status: '0'
        }

    ];

    return {
        // Will retrieve our entities list for displaying
        getEntities() {
            return entities;
        },

        // Update intities
        updateEntities(arr) {
            angular.forEach(entities, (e) => {
                angular.forEach(arr, (o) => {
                    if (o.name === e.name)
                    {
                        e.status = o.status;
                        return true;
                    }
                });
            });
        }
    }

}

export default EntityService;