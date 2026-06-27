// mock-db.js - LocalStorage simulator for PHP/MySQL database tables t_admin, t_user_data, t_user, t_status, etc.

const DEFAULT_ADMINS = [
    { ad_id: 'admin', ad_name: 'admin', ad_pswd: 'admin', ad_eml: 'admin@gmail.com' },
    { ad_id: 'AD00002', ad_name: 'Vijay Mahes', ad_pswd: 'QCoxFrwx', ad_eml: 'vijaymahes9080@gmail.com' }
];

const DEFAULT_USERS = [
    { s_id: 'CUTM00007', s_pwd: 'CmjAQZGw', s_dob: '2015-10-19', s_name: 'Vijay Mahes', s_email: 'vijaymahes9080@gmail.com', s_mob: '1234567890', s_signupdate: '2015-10-08 14:39:52.000000' },
    { s_id: 'CUTM00003', s_pwd: 'QBAfi0Wy', s_dob: '2015-09-08', s_name: 'Archana Kumari', s_email: 'archanajsr2310@gmail.com', s_mob: '1234567890', s_signupdate: '2015-09-30 14:43:31.000000' },
    { s_id: 'CUTM00008', s_pwd: 'X3PXhxEV', s_dob: '2015-10-15', s_name: 'Ankita Saigal', s_email: 'ankitabargarh@gmail.com', s_mob: '6884280078', s_signupdate: '2015-10-08 19:15:11.000000' }
];

const DEFAULT_APPLICATIONS = {
    'CUTM00007': {
        s_detid: 'DE00000007',
        s_id: 'CUTM00007',
        s_phn1: '1234567890',
        s_phn2: '1234567890',
        f_name: 'Mahendra Mahes',
        f_occ: 'Business',
        f_phn: '9876543210',
        m_name: 'Suhani Mahes',
        m_occ: 'Homemaker',
        m_phn: '9876543211',
        s_iop: '500000',
        s_sex: 'Male',
        s_cadr: 'Bhubaneswar, Odisha',
        s_cst: 'Odisha',
        s_cpin: '751001',
        s_cmob: '1234567890',
        s_padr: 'Bhubaneswar, Odisha',
        s_pst: 'Odisha',
        s_ppin: '751001',
        s_pmob: '1234567890',
        s_ruc: 'City',
        s_natn: 'Indian',
        s_relg: 'Hindu',
        s_catg: 'GEN',
        s_mainsxam: 'JEE MAIN',
        s_mainsrank: '1200',
        s_mainsroll: '98765432',
        s_mainsbrnch: 'Bhubaneshwar',
        s_branch: 'COMPUTER SCIENCE AND ENG',
        s_college: 'CIT',
        s_center: 'Bhubaneshwar',
        s_crtype: 'Regular',
        s_pcm: '85',
        s_tenbrd: 'CBSE',
        s_tenyop: '2013',
        s_tentotmark: '500',
        s_tenmarkob: '430',
        s_tendiv: '1',
        s_tenprcmark: '86',
        s_twlbrd: 'CBSE',
        s_twlyop: '2015',
        s_twltotmark: '500',
        s_twlmarkob: '415',
        s_twldiv: '1',
        s_twlprcmark: '83',
        s_moi: 'English',
        s_pay: 'Self',
        s_pic: 'loginuser.png',
        s_tenmarkpic: '4th Sem TT_CSE.pdf',
        s_tencerpic: '4th Sem TT_CSE.pdf',
        s_twdmarkpic: '4th Sem TT_CSE.pdf',
        s_twdcerpic: '4th Sem TT_CSE.pdf',
        s_idprfpic: '4th Sem TT_CSE.pdf',
        s_sigpic: 'Signature.png',
        s_status: 'Applied'
    },
    'CUTM00003': {
        s_detid: 'DE00000003',
        s_id: 'CUTM00003',
        s_phn1: '1234567890',
        s_phn2: '1234567890',
        f_name: 'Madhusudan Mahato',
        f_occ: 'Employee',
        f_phn: '1234567890',
        m_name: 'Sheela Mahato',
        m_occ: 'Housemaker',
        m_phn: '1234567890',
        s_iop: '400000',
        s_sex: 'Female',
        s_cadr: 'Jamshedpur',
        s_cst: 'Jharkhand',
        s_cpin: '831004',
        s_cmob: '1234567890',
        s_padr: 'Jamshedpur',
        s_pst: 'Jharkhand',
        s_ppin: '831004',
        s_pmob: '1234567890',
        s_ruc: 'City',
        s_natn: 'Indian',
        s_relg: 'Sikh',
        s_catg: 'GEN',
        s_mainsxam: 'JEE MAIN',
        s_mainsrank: '723',
        s_mainsroll: '71',
        s_mainsbrnch: 'Jamshedpur',
        s_branch: 'COMPUTER SCIENCE AND ENG',
        s_college: 'CIT',
        s_center: 'Bhubaneshwar',
        s_crtype: 'Regular',
        s_pcm: '80',
        s_tenbrd: 'ICSE',
        s_tenyop: '2011',
        s_tentotmark: '100',
        s_tenmarkob: '80',
        s_tendiv: '1',
        s_tenprcmark: '80',
        s_twlbrd: 'Ot',
        s_twlyop: '2014',
        s_twltotmark: '100',
        s_twlmarkob: '66',
        s_twldiv: '1',
        s_twlprcmark: '79',
        s_moi: 'English',
        s_pay: 'Self',
        s_pic: '103_0105.JPG',
        s_tenmarkpic: '4th Sem TT_CSE.pdf',
        s_tencerpic: '4th Sem TT_CSE.pdf',
        s_twdmarkpic: '4th Sem TT_CSE.pdf',
        s_twdcerpic: '4th Sem TT_CSE.pdf',
        s_idprfpic: '4th Sem TT_CSE.pdf',
        s_sigpic: 'Signature.png',
        s_status: 'Approved',
        s_omr: '123',
        s_mark: 345
    }
};

// Initialize DB if not present
function initDB() {
    if (!localStorage.getItem('oas_admins')) {
        localStorage.setItem('oas_admins', JSON.stringify(DEFAULT_ADMINS));
    }
    if (!localStorage.getItem('oas_users')) {
        localStorage.setItem('oas_users', JSON.stringify(DEFAULT_USERS));
    }
    if (!localStorage.getItem('oas_applications')) {
        localStorage.setItem('oas_applications', JSON.stringify(DEFAULT_APPLICATIONS));
    }
}

// Auth methods
function loginUser(userId, password) {
    initDB();
    const users = JSON.parse(localStorage.getItem('oas_users'));
    const user = users.find(u => u.s_id === userId && u.s_pwd === password);
    if (user) {
        sessionStorage.setItem('current_user', JSON.stringify(user));
        return user;
    }
    return null;
}

function signupUser(name, email, dob, password, mob) {
    initDB();
    const users = JSON.parse(localStorage.getItem('oas_users'));
    if (users.some(u => u.s_email === email)) {
        return { success: false, message: 'Email already registered.' };
    }
    const newId = 'CUTM' + String(users.length + 1).padStart(5, '0');
    const newUser = {
        s_id: newId,
        s_pwd: password,
        s_dob: dob,
        s_name: name,
        s_email: email,
        s_mob: mob,
        s_signupdate: new Date().toISOString()
    };
    users.push(newUser);
    localStorage.setItem('oas_users', JSON.stringify(users));
    return { success: true, s_id: newId };
}

function loginAdmin(adminId, password) {
    initDB();
    const admins = JSON.parse(localStorage.getItem('oas_admins'));
    const admin = admins.find(a => a.ad_id === adminId && a.ad_pswd === password);
    if (admin) {
        sessionStorage.setItem('current_admin', JSON.stringify(admin));
        return admin;
    }
    return null;
}

function getCurrentUser() {
    return JSON.parse(sessionStorage.getItem('current_user'));
}

function getCurrentAdmin() {
    return JSON.parse(sessionStorage.getItem('current_admin'));
}

function logout() {
    sessionStorage.removeItem('current_user');
    sessionStorage.removeItem('current_admin');
    window.location.href = 'index.html';
}

// Application methods
function getApplication(userId) {
    initDB();
    const apps = JSON.parse(localStorage.getItem('oas_applications'));
    return apps[userId] || null;
}

function saveApplication(userId, appData) {
    initDB();
    const apps = JSON.parse(localStorage.getItem('oas_applications'));
    
    // Merge existing files if they were uploaded
    const existing = apps[userId] || {};
    apps[userId] = {
        ...existing,
        ...appData,
        s_id: userId,
        s_status: existing.s_status || 'Applied'
    };
    localStorage.setItem('oas_applications', JSON.stringify(apps));
    return apps[userId];
}

function getAllApplications() {
    initDB();
    const apps = JSON.parse(localStorage.getItem('oas_applications'));
    const users = JSON.parse(localStorage.getItem('oas_users'));
    
    return Object.keys(apps).map(userId => {
        const user = users.find(u => u.s_id === userId) || {};
        return {
            ...apps[userId],
            s_name: user.s_name || apps[userId].s_name || 'N/A',
            s_email: user.s_email || apps[userId].s_email || 'N/A',
            s_dob: user.s_dob || apps[userId].s_dob || 'N/A'
        };
    });
}

function updateApplicationStatus(userId, status) {
    initDB();
    const apps = JSON.parse(localStorage.getItem('oas_applications'));
    if (apps[userId]) {
        apps[userId].s_status = status;
        localStorage.setItem('oas_applications', JSON.stringify(apps));
        return true;
    }
    return false;
}

function submitMarks(userId, omr, mark) {
    initDB();
    const apps = JSON.parse(localStorage.getItem('oas_applications'));
    if (apps[userId]) {
        apps[userId].s_omr = omr;
        apps[userId].s_mark = parseInt(mark);
        localStorage.setItem('oas_applications', JSON.stringify(apps));
        return true;
    }
    return false;
}

// Auto init db on script load
initDB();
