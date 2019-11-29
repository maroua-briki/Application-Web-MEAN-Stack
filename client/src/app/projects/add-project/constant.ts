export const constant = {
        appitems: [
        {
            label: 'Hosted kubernetes clusters',
            faIcon: 'fas fa-sync-alt',
            items: [
                {
                    label: 'Google Kubernetes Engine (GKE) ',
                    link: '',
                    faIcon: 'fab fa-google'
                },
                {
                    label: 'Amazon Elastic Container Service for Kubernetes (EKS)',
                    link: '',
                    faIcon: 'fab fa-aws',
                },
                {
                    label: 'Azure Kubernetes Service (AKS)',
                    link: '',
                    faIcon: 'fab fa-microsoft',
                }
            ]
        },
        {
            label: 'OFF Premise',
            faIcon: 'fas fa-cloud',
            items: [
                {
                    label: 'Google Cloud',
                    link: '/home/projects/google',
                  
                    faIcon: 'fab fa-google'
                },
                {
                    label: 'AWS Cloud',
                    link: 'home/projects/aws',
                    faIcon: 'fab fa-aws'
                }, {
                    label: 'Azure Cloud',
                    link: 'home/projects/azure',
                    faIcon: 'fab fa-microsoft',
                }
            ]
        },
        {
            label: 'ON Premise',
            link: 'home/projects/onpremise',
            faIcon: 'fas fa-globe',
        }
    ],
config : {
        paddingAtStart: true,
        classname: 'my-custom-class',
        // listBackgroundColor: 'rgb(208, 241, 239)',
        listBackgroundColor: 'rgb(255, 255, 255)',
        fontColor: 'rgb(8, 54, 71)',
        // fontColor: 'rgb(255, 255, 255)',
        // backgroundColor: 'rgb(208, 241, 239)',
        backgroundColor: 'rgb(255, 255, 255)',
        selectedListFontColor: 'red',
      }
    };
    
