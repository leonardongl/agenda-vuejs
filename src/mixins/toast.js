export const toast = {
    data: function () {
        return {
            success: {
                position: 'topRight',
                iconColor: 'white',
                class: 'alert alert-success alert-dismissible position-absolute',
                theme: 'dark',
                icon: 'icon fa fa-check'
            },
            error: {
                position: 'topRight',
                iconColor: 'white',
                class: 'alert alert-danger alert-dismissible position-absolute',
                theme: 'dark',
                icon: 'icon fa fa-ban'
            },
        }
    }
}