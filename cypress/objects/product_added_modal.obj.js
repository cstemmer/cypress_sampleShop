const modal = '#cartModal'

module.exports = {
    modal: modal,
    header: `${modal} .modal-header h4`,
    icon: `${modal} .modal-header i`,
    message: `${modal} .modal-body > :first-child`,
    viewCartLink: `${modal} .modal-body a`,
    continueShoppingButton: `${modal} .close-modal`,
}