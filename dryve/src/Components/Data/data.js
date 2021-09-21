import React from 'react';
import ML from '../../Assets/ml.png';
import auto from '../../Assets/autoline.ico';

export let array = [
    {
        id: '0', title: 'Veículos publicados', body: '26', logo: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.3335 7.5L16.1501 8.33333" stroke="#0065FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3.85841 8.33333L1.66675 7.5" stroke="#0065FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15.2083 11.6667H13.125" stroke="#0065FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6.87508 11.6667H4.79175" stroke="#0065FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.1493 8.3335L15.4501 4.99016C15.2476 4.02516 14.3968 3.3335 13.4101 3.3335H6.67679C5.70929 3.3335 4.86846 4.00016 4.64846 4.94266L3.85596 8.3335" stroke="#0065FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70841 16.6668H4.58341C5.27341 16.6668 5.83341 16.1068 5.83341 15.4168V14.5835H14.1667V15.4168C14.1667 16.1068 14.7267 16.6668 15.4167 16.6668H17.2917C17.8667 16.6668 18.3334 16.2002 18.3334 15.6252V10.8335C18.3334 9.45266 17.2142 8.3335 15.8334 8.3335H4.16675C2.78591 8.3335 1.66675 9.45266 1.66675 10.8335V15.6252C1.66675 16.2002 2.13341 16.6668 2.70841 16.6668Z" stroke="#0065FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    },
    {
        id: '1', title: 'Preço médio', body: 'R$ 41.5k', logo: <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.68 1.11133H17.5522C18.8433 1.11133 19.8889 2.15688 19.8889 3.44688V8.31911C19.8889 8.93911 19.6422 9.53244 19.2044 9.97133L9.85997 19.3158C8.94774 20.228 7.46886 20.228 6.55663 19.3158L1.68441 14.4435C0.772189 13.5313 0.772189 12.0524 1.68441 11.1402L11.0289 1.79577C11.4666 1.35799 12.0611 1.11133 12.68 1.11133Z" stroke="#0065FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.8779 10.1223L11.489 9.51123" stroke="#0065FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7.18899 13.811L6.57788 14.4221" stroke="#0065FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6.57012 12.3006C6.46901 12.7195 6.56012 13.1706 6.8879 13.4984L7.19457 13.8051L7.56012 14.1706C8.03568 14.6462 8.80679 14.6462 9.28234 14.1706C9.67679 13.7762 9.75346 13.1628 9.46568 12.6839L8.60457 11.2462C8.3179 10.7673 8.39346 10.1539 8.7879 9.7595C9.26346 9.28394 10.0346 9.28394 10.5101 9.7595L10.8757 10.1251L11.1823 10.4317C11.509 10.7584 11.6001 11.2084 11.5012 11.6262" stroke="#0065FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15.2303 5.76993C15.3913 5.93091 15.3913 6.19192 15.2303 6.3529C15.0694 6.51389 14.8084 6.51389 14.6474 6.3529C14.4864 6.19192 14.4864 5.93091 14.6474 5.76993C14.8084 5.60895 15.0694 5.60895 15.2303 5.76993" stroke="#0065FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    },
    {
        id: '2', title: 'Km médio', body: '68.800 km', logo: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="#0065FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14.5084 15.8582C14.3584 15.4832 14.1334 15.1498 13.8417 14.8832C13.3417 14.4248 12.7 14.1665 12.0167 14.1665C10.8917 14.1665 9.10839 14.1665 7.97506 14.1665C7.30006 14.1665 6.65005 14.4248 6.15005 14.8832C5.85839 15.1582 5.62507 15.4915 5.4834 15.8582" stroke="#0065FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.99992 11.6668C10.9204 11.6668 11.6666 10.9206 11.6666 10.0002C11.6666 9.07969 10.9204 8.3335 9.99992 8.3335C9.07944 8.3335 8.33325 9.07969 8.33325 10.0002C8.33325 10.9206 9.07944 11.6668 9.99992 11.6668Z" stroke="#0065FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10 2.5V4.16667" stroke="#0065FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13.7499 3.5083L13.0249 4.7583" stroke="#0065FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6.25 3.5083L6.975 4.7583" stroke="#0065FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3.5083 6.25L4.7583 6.975" stroke="#0065FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17.5 10H16.25" stroke="#0065FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3.75 10H2.5" stroke="#0065FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M11.4917 9.275L16.4917 6.25" stroke="#0065FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    },
    {
        id: '3', title: 'Idade média do estoque', body: '4 anos', logo: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3333 1.6665V4.99984" stroke="#0065FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6.66675 1.6665V4.99984" stroke="#0065FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M2.5 7.5H17.5" stroke="#0065FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15.8333 3.33301H4.16667C3.25 3.33301 2.5 4.08301 2.5 4.99967V15.833C2.5 16.7497 3.25 17.4997 4.16667 17.4997H15.8333C16.75 17.4997 17.5 16.7497 17.5 15.833V4.99967C17.5 4.08301 16.75 3.33301 15.8333 3.33301Z" stroke="#0065FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    },

]

export let arrayV = [
    { id: '0', title: 'Test-drives vencidos', body: 'corpo'},
    { id: '1', title: 'Test-drives do dia', body: 'corpo'},
]

export let leads = [
    {
        id: '0', title: 'OLX', body: '40', logo: <svg width="24" height="13" viewBox="0 0 24 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.42716 10.0883C3.12078 10.0883 2.17729 8.99964 2.17729 7.33039C2.17729 5.66113 3.12078 4.57249 4.42716 4.57249C5.73353 4.57249 6.67702 5.73371 6.67702 7.33039C6.67702 8.99964 5.80611 10.0883 4.42716 10.0883ZM4.42716 12.193C6.89475 12.193 8.85431 10.1609 8.85431 7.33039C8.85431 4.57249 7.03991 2.46777 4.42716 2.46777C1.95956 2.46777 0 4.49991 0 7.33039C0.0725763 10.1609 1.88699 12.193 4.42716 12.193Z" fill="#6E0AD6" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6687 8.49143H14.8781C15.1684 8.49143 15.3136 8.34628 15.3136 8.05597V6.67702C15.3136 6.38672 15.1684 6.24157 14.8781 6.24157H12.0476V0.435458C12.0476 0.145153 11.9025 0 11.6122 0H10.2332C9.94293 0 9.79778 0.145153 9.79778 0.435458V7.54794C9.7252 8.20113 10.0881 8.49143 10.6687 8.49143Z" fill="#8CE563" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4022 12.0479L18.9423 9.07225L21.4099 12.0479C21.6277 12.3382 21.918 12.3382 22.1357 12.1205L23.1518 11.2495C23.3695 11.0318 23.4421 10.7415 23.2243 10.5238L20.3939 7.33041L22.8615 4.49993C23.0792 4.2822 23.0792 3.99189 22.7889 3.77416L21.8454 2.90325C21.6277 2.68552 21.3373 2.68552 21.1196 2.97582L18.8698 5.66115L16.5473 2.97582C16.3296 2.75809 16.0393 2.68552 15.8215 2.90325L14.8781 3.77416C14.6603 3.99189 14.5877 4.2822 14.8781 4.49993L17.4182 7.33041L14.6603 10.4512C14.4426 10.7415 14.4426 10.9592 14.7329 11.177L15.6764 12.0479C15.8941 12.3382 16.1844 12.3382 16.4022 12.0479Z" fill="#F28000" />
        </svg>
    },
    {
        id: '1', title: 'Webmotors', body: '29', logo: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.48276 0 0 4.48276 0 10C0 15.5172 4.48276 20 10 20C15.5172 20 20 15.5172 20 10C20 4.48276 15.5603 0 10 0ZM15.6034 13.4483C15.6034 13.9224 15.2155 14.3103 14.7414 14.2672C14.3103 14.2241 13.9655 13.8362 13.9655 13.4052V11.25C13.9655 10.9914 13.75 10.819 13.5345 10.819H11.2931C11.0345 10.819 10.8621 11.0345 10.8621 11.25V13.9224C10.8621 14.3966 10.4741 14.7845 10 14.7414C9.56897 14.6983 9.22414 14.3103 9.22414 13.8793V11.25C9.22414 10.9914 9.00862 10.819 8.7931 10.819H6.55172C6.2931 10.819 6.12069 11.0345 6.12069 11.25V13.4483C6.12069 13.9224 5.73276 14.3103 5.25862 14.2672C4.82759 14.2241 4.48276 13.8362 4.48276 13.4052V6.55172C4.48276 6.07759 4.87069 5.68966 5.34483 5.73276C5.77586 5.77586 6.12069 6.16379 6.12069 6.59483V8.75C6.12069 9.00862 6.33621 9.18103 6.55172 9.18103H8.7931C9.05172 9.18103 9.22414 8.96552 9.22414 8.75V6.07759C9.22414 5.60345 9.61207 5.21552 10.0862 5.25862C10.5172 5.30172 10.8621 5.68965 10.8621 6.12069V8.75C10.8621 9.00862 11.0776 9.18103 11.2931 9.18103H13.5345C13.7931 9.18103 13.9655 8.96552 13.9655 8.75V6.59483C13.9655 6.16379 14.3103 5.73276 14.7414 5.73276C15.2155 5.68966 15.6034 6.07759 15.6034 6.55172V13.4483Z" fill="#EC0928" />
        </svg>
    },
    {
        id: '2', title: 'iCarros', body: '18', logo: <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.82807 5.32786C9.50341 5.32786 10.0437 4.78759 10.0437 4.04471C10.0437 3.36937 9.50341 2.8291 8.82807 2.8291C8.08519 2.8291 7.54492 3.36937 7.54492 4.04471C7.54492 4.78759 8.08519 5.32786 8.82807 5.32786Z" fill="#2262CC" />
            <path d="M14.0976 0.871642C10.856 -0.681638 6.80392 -0.0738328 3.89996 2.01972C-0.422206 5.12628 -1.23261 11.4069 1.87395 15.7291C3.7649 18.2279 7.07406 19.3084 10.1131 19.2409C12.4768 19.1733 15.1781 18.4305 17.0691 16.8772L16.7314 16.472C14.6379 18.2279 9.97802 19.0383 7.07406 18.0253C4.1701 17.0122 2.34668 14.5135 1.67134 11.6095C1.13107 8.97571 1.60381 6.34189 3.15709 4.11327C5.58831 0.804108 9.70788 -0.208901 13.2872 1.68205C17.2717 3.64053 18.8925 9.11078 16.0561 12.7576C14.9755 14.0408 12.8144 15.2564 11.1936 14.1083C10.2482 13.4329 10.3157 12.2173 10.3157 11.1368L10.4508 6.47696H6.73639V7.28736H8.28967C8.22213 8.90818 8.1546 12.0823 8.1546 12.1498C8.1546 13.5005 8.62734 15.6616 12.0716 15.3239C15.3807 15.0538 18.4198 12.4875 18.8925 9.31338C19.4328 5.66655 17.3392 2.42492 14.0976 0.871642Z" fill="#2262CC" />
        </svg>
    },
    { id: '3', title: 'Autoline', body: '7', logo: <img src={auto} width={20} height={20} /> },
    { id: '4', title: 'MercadoLivre', body: '5', logo: <img src={ML} width={30} height={20} /> },
]

export const columns = [
    { id: 1, name: 'Pedro ', sobrenome: 'Gandra', email: 'pedrogandra@gmail.com', telefone: '(61) 99610-4666' },
    { id: 2, name: 'Renato Silva ', sobrenome: 'Medeiros', email: 're.medeiros@uol.com.br', telefone: '(16) 99873-2219' },
    { id: 3, name: 'Eduardo Rocha ', sobrenome: 'Oliveira', email: 'eduardorocha@hotmail.com', telefone: '(16) 99627-0092' },
    { id: 4, name: 'Paulo ', sobrenome: 'Mendes', email: 'paulo@mendesconsultoria.com.br', telefone: '(16) 99887-0126' },
    { id: 5, name: 'Tatiane ', sobrenome: 'Alves', email: 'tati.alves@globo.com', telefone: '(16) 99876-4251' },
    { id: 6, name: 'Mario Augusto dos ', sobrenome: 'Santos', email: 'marioaugusto.santos@gmail.com', telefone: '(16) 99654-0045' },
    { id: 7, name: 'Alice Rocha ', sobrenome: 'Silva', email: 'alicerocha@outlook.com', telefone: '(16) 99678-6711' },
    { id: 8, name: 'Thiago ', sobrenome: 'Costa', email: 'thicosta@uol.com.br', telefone: '(16) 99726-9811' },
    { id: 9, name: 'Thiago ', sobrenome: 'Costa', email: 'thicosta@uol.com.br', telefone: '(16) 99726-9811' },
];