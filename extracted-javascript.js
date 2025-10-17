// Debug utility (simplified version)
const debug = {
    log: (...args) => {
        if (typeof console !== 'undefined' && console.log) {
            console.log(...args);
        }
    },
    error: (...args) => {
        if (typeof console !== 'undefined' && console.error) {
            console.error(...args);
        }
    },
    warn: (...args) => {
        if (typeof console !== 'undefined' && console.warn) {
            console.warn(...args);
        }
    }
};

// Translations
const translations = {
  en: {
    title: 'Xiaomi Cloud Tokens Extractor',
    subtitle: 'Extract device tokens and keys from your Xiaomi account',
    authentication: 'Authentication',
    loginTab: 'Login with Credentials',
    sessionTab: 'Use Saved Session',
    username: 'Username',
    usernamePlaceholder: 'Email, phone number, or Xiaomi ID',
    usernameHint: 'Accepts: Email address, phone number (mostly CN accounts), or Xiaomi account ID',
    password: 'Password',
    serverRegion: 'Server Region',
    serverHint1: 'Choose the region where you created your Xiaomi account or where your devices were purchased',
    serverHint2: 'You can switch to other regions after login without re-authenticating',
    login: 'Login',
    dropZoneTitle: 'Drop session file here',
    dropZoneSubtitle: 'or click to browse',
    chooseFile: 'Choose File',
    twoFactorTitle: 'Two-Factor Authentication',
    twoFactorSteps: 'Please follow these steps:',
    twoFactorStep1: 'Open this URL in your browser:',
    twoFactorStep2: 'Choose your verification method (SMS or Email)',
    twoFactorStep3: "You'll receive a 6-digit verification code",
    twoFactorStep4: 'DO NOT enter the code on Xiaomi\'s website!',
    twoFactorStep5: 'Close the browser and enter the code below:',
    verificationCode: 'Verification Code',
    verificationPlaceholder: 'Enter 6 digits',
    verify: 'Verify',
    devices: 'Devices',
    authenticatedSession: 'Authenticated Session',
    user: 'USER',
    id: 'ID',
    session: 'SESSION',
    saveSession: 'Save Session',
    changeAccount: 'Change Account',
    refresh: 'Refresh',
    loadingDevices: 'Loading devices from',
    noDevicesFound: 'No devices found in',
    scanningRegion: 'Scanning',
    scanningProgress: 'region...',
    foundDevices: 'Found',
    devicesIn: 'device(s) in',
    showing: 'Showing',
    devicesFrom: 'device(s) from',
    online: 'Online',
    offline: 'Offline',
    clickToCopy: 'Click to copy',
    privacyTitle: 'Privacy & Security Disclosure',
    privacyWhat: 'What This Tool Does',
    privacyWhatDesc: 'This tool extracts device tokens and authentication keys from your Xiaomi account. These tokens are used to locally control your Xiaomi smart home devices without going through Xiaomi\'s cloud servers.',
    privacyHow: 'How It Works',
    privacyHowItems: [
      'Authenticates with Xiaomi\'s servers using your credentials',
      'Retrieves a list of all devices linked to your account',
      'Extracts device tokens and BLE keys for local control'
    ],
    privacyData: 'Data Handling',
    privacyDataItems: [
      '<strong>No storage:</strong> Your credentials are never stored on the server',
      '<strong>Session files:</strong> Saved locally on your device only',
      '<strong>Direct communication:</strong> All API calls go directly to Xiaomi servers',
      '<strong>Open source:</strong> Code is fully auditable on GitHub'
    ],
    privacySecurity: 'Security Recommendations',
    privacySecurityItems: [
      'Use HTTPS when deploying this tool',
      'Keep session files secure - they contain authentication tokens',
      'Enable 2FA on your Xiaomi account',
      'Consider using app-specific passwords if available'
    ],
    disclaimer: 'Disclaimer:',
    disclaimerText: 'This is an unofficial tool not affiliated with Xiaomi. Use at your own risk. The tool replicates the functionality of the Python-based Xiaomi-cloud-tokens-extractor project in a web interface.',
    version: 'VERSION',
    githubLink: 'GitHub',
    pythonLink: 'Original Python Version',
    model: 'Model',
    did: 'DID',
    token: 'Token',
    ip: 'IP',
    mac: 'MAC',
    bleKey: 'BLE Key',
    wifi: 'WiFi',
    unknownDevice: 'Unknown Device',
    loginSuccessful: 'Login successful!',
    verificationRequired: '2FA verification required',
    verificationSuccessful: '2FA verification successful!',
    sessionLoaded: 'Session loaded, validating...',
    sessionValid: 'Session is valid!',
    sessionExpired: 'Session expired, please login again',
    invalidSessionFile: 'Invalid session file',
    sessionSaved: 'Session saved successfully',
    failedToCopy: 'Failed to copy to clipboard',
    error: 'Error',
    warning: 'Warning',
    info: 'Info',
    success: 'Success',
    noDevicesInAnyRegion: 'No devices found in any region. Your devices might be offline or not yet registered.',
    searchingDevices: 'Searching for devices...',
    // Region names
    regionChina: '🇨🇳 China (cn) - Mainland China',
    regionGermany: '🇩🇪 Germany (de) - Europe',
    regionUS: '🇺🇸 United States (us) - Americas',
    regionRussia: '🇷🇺 Russia (ru) - Russia/CIS',
    regionTaiwan: '🇹🇼 Taiwan (tw) - Taiwan',
    regionSingapore: '🇸🇬 Singapore (sg) - Southeast Asia',
    regionIndia: '🇮🇳 India (in) - India',
    regionInternational: '🌍 International (i2) - Other regions',
    // Additional translation keys for JavaScript
    pleaseDropJsonFile: 'Please drop a JSON file',
    sessionNotFound: 'Session not found. Please login again.',
    verificationSuccessful2FA: '2FA verification successful!',
    sessionExpiredLogin: 'Session expired, please login again',
    foundDevicesCount: 'Found',
    deviceCount: 'device(s)',
    errorMessage: 'Error:',
    loginFailed: 'Login failed:',
    verificationFailed: 'Verification failed:',
    foundDevicesInRegion: 'Found',
    inRegion: 'device(s) in',
    regionUpper: 'region!',
    noDevicesAnyRegion: 'No devices found in any region',
    loadingDevicesFrom: 'Loading devices from',
    server: 'server...',
    showingDevicesFrom: 'Showing',
    devicesSuffix: 'device(s) from',
    serverText: 'server',
    errorLoadingFrom: 'Error loading from'
  },
  zh: {
    title: '小米云令牌提取器',
    subtitle: '从您的小米账户提取设备令牌和密钥',
    authentication: '身份验证',
    loginTab: '使用账号密码登录',
    sessionTab: '使用已保存的会话',
    username: '用户名',
    usernamePlaceholder: '邮箱、手机号或小米ID',
    usernameHint: '支持：邮箱地址、手机号（主要是国内账号）或小米账号ID',
    password: '密码',
    serverRegion: '服务器区域',
    serverHint1: '选择您创建小米账户或购买设备的区域',
    serverHint2: '登录后可以切换到其他区域而无需重新验证',
    login: '登录',
    dropZoneTitle: '将会话文件拖放到此处',
    dropZoneSubtitle: '或点击浏览',
    chooseFile: '选择文件',
    twoFactorTitle: '两步验证',
    twoFactorSteps: '请按照以下步骤操作：',
    twoFactorStep1: '在浏览器中打开此链接：',
    twoFactorStep2: '选择您的验证方式（短信或邮箱）',
    twoFactorStep3: '您将收到6位验证码',
    twoFactorStep4: '请勿在小米官网输入验证码！',
    twoFactorStep5: '关闭浏览器并在下方输入验证码：',
    verificationCode: '验证码',
    verificationPlaceholder: '输入6位数字',
    verify: '验证',
    devices: '设备',
    authenticatedSession: '已认证会话',
    user: '用户',
    id: 'ID',
    session: '会话',
    saveSession: '保存会话',
    changeAccount: '更换账号',
    refresh: '刷新',
    loadingDevices: '正在从以下服务器加载设备',
    noDevicesFound: '在以下区域未找到设备',
    scanningRegion: '正在扫描',
    scanningProgress: '区域...',
    foundDevices: '在',
    devicesIn: '找到',
    showing: '显示来自',
    devicesFrom: '服务器的',
    online: '在线',
    offline: '离线',
    clickToCopy: '点击复制',
    privacyTitle: '隐私与安全声明',
    privacyWhat: '工具功能',
    privacyWhatDesc: '此工具从您的小米账户提取设备令牌和认证密钥。这些令牌用于在本地控制您的小米智能家居设备，无需通过小米云服务器。',
    privacyHow: '工作原理',
    privacyHowItems: [
      '使用您的凭据向小米服务器进行身份验证',
      '检索链接到您账户的所有设备列表',
      '提取用于本地控制的设备令牌和BLE密钥'
    ],
    privacyData: '数据处理',
    privacyDataItems: [
      '<strong>不存储：</strong>您的凭据永远不会存储在服务器上',
      '<strong>会话文件：</strong>仅保存在您的设备本地',
      '<strong>直接通信：</strong>所有API调用直接发送到小米服务器',
      '<strong>开源代码：</strong>代码在GitHub上完全可审计'
    ],
    privacySecurity: '安全建议',
    privacySecurityItems: [
      '部署此工具时使用HTTPS',
      '妥善保管会话文件 - 它们包含认证令牌',
      '在您的小米账户上启用两步验证',
      '如果可用，考虑使用应用专用密码'
    ],
    disclaimer: '免责声明：',
    disclaimerText: '这是一个非官方工具，与小米公司无关。使用风险自负。该工具在Web界面中复制了基于Python的Xiaomi-cloud-tokens-extractor项目的功能。',
    version: '版本',
    githubLink: 'GitHub',
    pythonLink: '原始Python版本',
    model: '型号',
    did: 'DID',
    token: 'Token',
    ip: 'IP',
    mac: 'MAC',
    bleKey: 'BLE密钥',
    wifi: 'WiFi',
    unknownDevice: '未知设备',
    loginSuccessful: '登录成功！',
    verificationRequired: '需要两步验证',
    verificationSuccessful: '两步验证成功！',
    sessionLoaded: '会话已加载，正在验证...',
    sessionValid: '会话有效！',
    sessionExpired: '会话已过期，请重新登录',
    invalidSessionFile: '无效的会话文件',
    sessionSaved: '会话保存成功',
    failedToCopy: '复制到剪贴板失败',
    error: '错误',
    warning: '警告',
    info: '信息',
    success: '成功',
    noDevicesInAnyRegion: '在任何区域都未找到设备。您的设备可能离线或尚未注册。',
    searchingDevices: '正在搜索设备...',
    // Region names
    regionChina: '🇨🇳 中国 (cn) - 中国大陆',
    regionGermany: '🇩🇪 德国 (de) - 欧洲',
    regionUS: '🇺🇸 美国 (us) - 美洲',
    regionRussia: '🇷🇺 俄罗斯 (ru) - 俄罗斯/独联体',
    regionTaiwan: '🇹🇼 台湾 (tw) - 台湾地区',
    regionSingapore: '🇸🇬 新加坡 (sg) - 东南亚',
    regionIndia: '🇮🇳 印度 (in) - 印度',
    regionInternational: '🌍 国际 (i2) - 其他地区',
    // Additional translation keys for JavaScript
    pleaseDropJsonFile: '请拖放一个JSON文件',
    sessionNotFound: '未找到会话。请重新登录。',
    verificationSuccessful2FA: '两步验证成功！',
    sessionExpiredLogin: '会话已过期，请重新登录',
    foundDevicesCount: '找到',
    deviceCount: '个设备',
    errorMessage: '错误：',
    loginFailed: '登录失败：',
    verificationFailed: '验证失败：',
    foundDevicesInRegion: '在',
    inRegion: '区域找到',
    regionUpper: '个设备！',
    noDevicesAnyRegion: '在任何区域都未找到设备',
    loadingDevicesFrom: '正在从',
    server: '服务器加载设备...',
    showingDevicesFrom: '显示来自',
    devicesSuffix: '个设备',
    serverText: '服务器',
    errorLoadingFrom: '从以下位置加载时出错'
  }
};

// Set current language based on URL or default
let currentLang = window.location.pathname === '/zh' ? 'zh' : 'en';

// Translation function
function t(key) {
    return translations[currentLang]?.[key] || translations.en[key] || key;
}

// Language switching
function switchLanguage() {
    const newLang = currentLang === 'en' ? 'zh' : 'en';
    window.location.href = newLang === 'zh' ? '/zh' : '/';
}

let currentSession = null;
let tempClientState = null; // Store client state for stateless 2FA
let selectedServer = 'cn'; // Store selected server
let sessionLoadedFromFile = false; // Track if session was loaded from file

// Tab switching
function switchAuthTab(tab) {
    const tabs = document.querySelectorAll('.auth-tab');
    const contents = document.querySelectorAll('.auth-content');
    
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));
    
    if (tab === 'login') {
        tabs[0].classList.add('active');
        document.getElementById('loginTab').classList.add('active');
    } else {
        tabs[1].classList.add('active');
        document.getElementById('sessionTab').classList.add('active');
    }
}

// Drag and drop setup
const dropZone = document.getElementById('dropZone');
const loadSessionInput = document.getElementById('loadSession');

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('drag-over');
});

dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('drag-over');
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('drag-over');
    
    const files = e.dataTransfer.files;
    if (files.length > 0 && files[0].type === 'application/json') {
        handleSessionFile(files[0]);
    } else {
        showAlert(t('pleaseDropJsonFile'), 'error');
    }
});

dropZone.addEventListener('click', (e) => {
    // Don't trigger if clicking on the button or its children
    if (e.target.closest('button')) {
        return;
    }
    loadSessionInput.click();
});

// Alert functions
function showAlert(message, type = 'info') {
    const alertsDiv = document.getElementById('alerts');
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    
    // Add icon based on type
    const icons = {
        success: '✓',
        error: '×',
        warning: '!',
        info: 'i'
    };
    
    alert.innerHTML = `
        <span style="font-size: 1.25rem; font-weight: bold;">${icons[type] || icons.info}</span>
        <span>${message}</span>
    `;
    
    alertsDiv.appendChild(alert);
    
    // Auto-dismiss after 5 seconds
    setTimeout(() => {
        alert.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => alert.remove(), 300);
    }, 5000);
}

// Add slide out animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Login form handler
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const credentials = {
        username: formData.get('username'),
        password: formData.get('password'),
        server: formData.get('server')
    };
    
    // Store selected server
    selectedServer = credentials.server;
    
    const loginBtn = document.getElementById('loginBtn');
    loginBtn.disabled = true;
    loginBtn.innerHTML = '<span class="loading"></span> Logging in...';
    
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        });
        
        const result = await response.json();
        
        if (result.success) {
            currentSession = result.session;
            currentSession.server = credentials.server; // Store server selection
            sessionLoadedFromFile = false; // Not loaded from file
            showAlert(t('loginSuccessful'), 'success');
            updateSessionUI();
            // Set server selector to match login selection
            const serverSelector = document.getElementById('serverSelector');
            if (serverSelector) {
                serverSelector.value = credentials.server;
            }
            await loadDevices();
        } else if (result.requires2FA) {
            // Store the client state for 2FA verification
            tempClientState = result.clientState;
            
            const verifyUrlElement = document.getElementById('verifyUrl');
            verifyUrlElement.textContent = result.verifyUrl;
            verifyUrlElement.href = result.verifyUrl;
            
            // Clear the verification code input
            const verifyCodeInput = document.getElementById('verifyCode');
            verifyCodeInput.value = '';
            
            // Generate a unique name to prevent autocomplete
            verifyCodeInput.setAttribute('name', 'verifyCode-' + Date.now());
            
            // Hide login form and show verification section
            document.getElementById('loginForm').classList.add('hidden');
            document.getElementById('verifySection').classList.remove('hidden');
            
            // Focus on the input after a short delay
            setTimeout(() => verifyCodeInput.focus(), 100);
            
            showAlert(t('verificationRequired'), 'warning');
        } else {
            showAlert(t('loginFailed') + ' ' + result.error, 'error');
        }
    } catch (error) {
        showAlert(t('errorMessage') + ' ' + error.message, 'error');
    } finally {
        loginBtn.disabled = false;
        loginBtn.textContent = t('login');
    }
});

// 2FA verification handler
document.getElementById('verifyForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const code = document.getElementById('verifyCode').value;
    
    if (!tempClientState) {
        showAlert(t('sessionNotFound'), 'error');
        document.getElementById('verifySection').classList.add('hidden');
        document.getElementById('loginForm').classList.remove('hidden');
        return;
    }
    
    try {
        const response = await fetch('/api/verify-2fa', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ticket: code,
                clientState: tempClientState
            })
        });
        
        const result = await response.json();
        
        if (result.success) {
            currentSession = result.session;
            currentSession.server = selectedServer; // Store server selection
            sessionLoadedFromFile = false; // Not loaded from file
            document.getElementById('verifySection').classList.add('hidden');
            document.getElementById('loginForm').classList.remove('hidden');
            showAlert(t('verificationSuccessful2FA'), 'success');
            updateSessionUI();
            // Set server selector to match original selection
            const serverSelector = document.getElementById('serverSelector');
            if (serverSelector) {
                serverSelector.value = selectedServer;
            }
            await loadDevices();
        } else {
            showAlert(t('verificationFailed') + ' ' + result.error, 'error');
        }
    } catch (error) {
        showAlert(t('errorMessage') + ' ' + error.message, 'error');
    }
});

// Load session file
document.getElementById('loadSession').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    handleSessionFile(file);
});

// Handle session file
async function handleSessionFile(file) {
    try {
        const text = await file.text();
        const session = JSON.parse(text);
        
        // Convert Python session format to web format
        if (session.timestamp && !session.savedAt) {
            session.savedAt = new Date(session.timestamp * 1000).toISOString();
        }
        if (session.device_id && !session.deviceId) {
            session.deviceId = session.device_id;
        }
        
        currentSession = session;
        sessionLoadedFromFile = true; // Mark as loaded from file
        updateSessionUI();
        
        // Validate and load devices
        showAlert(t('sessionLoaded'), 'info');
        const response = await fetch('/api/validate-session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sessionData: currentSession })
        });
        
        const result = await response.json();
        if (result.valid) {
            showAlert(t('sessionValid'), 'success');
            // Set server selector to loaded session's server if available
            const serverSelector = document.getElementById('serverSelector');
            if (serverSelector && currentSession.server) {
                serverSelector.value = currentSession.server;
            }
            await loadDevices();
        } else {
            showAlert(t('sessionExpiredLogin'), 'error');
            currentSession = null;
            updateSessionUI();
        }
    } catch (error) {
        showAlert(t('invalidSessionFile'), 'error');
    }
}

// Logout function
function logout() {
    currentSession = null;
    tempClientState = null;
    selectedServer = 'cn';
    sessionLoadedFromFile = false;
    location.reload();
}

// Save session
function saveSession() {
    if (!currentSession) return;
    
    const filename = `${currentSession.username}_xiaomi_session_${new Date().toISOString().split('T')[0]}.json`;
    const blob = new Blob([JSON.stringify(currentSession, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    
    URL.revokeObjectURL(url);
    showAlert(t('sessionSaved'), 'success');
}

// Update session UI
function updateSessionUI() {
    const sessionInfo = document.getElementById('sessionInfo');
    const authCard = document.querySelector('.card');
    const authTabs = document.querySelector('.auth-tabs');
    const authContents = document.querySelectorAll('.auth-content');
    
    if (currentSession) {
        // Hide tabs and auth content when logged in
        authTabs.style.display = 'none';
        authContents.forEach(content => content.style.display = 'none');
        
        // Create collapsed session view
        const savedAt = currentSession.savedAt ? new Date(currentSession.savedAt).toLocaleString() : 'Unknown';
        authCard.innerHTML = `
            <div class="card-header" style="margin-bottom: 0; justify-content: space-between; align-items: center;">
                <div style="display: flex; align-items: center;">
                    <div class="card-icon">🔐</div>
                    <div style="margin-left: 1rem;">
                        <h2 style="margin-bottom: 0.25rem;">${t('authenticatedSession')}</h2>
                        <div style="display: flex; gap: 1.5rem; font-size: 0.8125rem; color: var(--text-secondary); font-weight: 400;">
                            <span style="display: flex; align-items: center; gap: 0.25rem;">
                                <span style="color: var(--text-muted); text-transform: uppercase; font-size: 0.6875rem; letter-spacing: 0.05em;">${t('user')}</span>
                                <span style="color: var(--text-secondary);">${currentSession.username}</span>
                            </span>
                            <span style="display: flex; align-items: center; gap: 0.25rem;">
                                <span style="color: var(--text-muted); text-transform: uppercase; font-size: 0.6875rem; letter-spacing: 0.05em;">${t('id')}</span>
                                <span style="color: var(--text-secondary);">${currentSession.userId}</span>
                            </span>
                            <span style="display: flex; align-items: center; gap: 0.25rem;">
                                <span style="color: var(--text-muted); text-transform: uppercase; font-size: 0.6875rem; letter-spacing: 0.05em;">${t('session')}</span>
                                <span style="color: var(--text-secondary);">${savedAt}</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div style="display: flex; gap: 0.5rem;">
                    ${!sessionLoadedFromFile ? `
                        <button id="saveSessionBtnTop" class="button-secondary" style="padding: 0.5rem 1rem; font-size: 0.875rem;" onclick="saveSession()">
                            💾 ${t('saveSession')}
                        </button>
                    ` : ''}
                    <button class="button-secondary" style="padding: 0.5rem 1rem; font-size: 0.875rem;" onclick="logout()">
                        🔄 ${t('changeAccount')}
                    </button>
                </div>
            </div>
        `;
        document.getElementById('devicesSection').classList.remove('hidden');
    } else {
        // Restore original auth card structure
        location.reload(); // Simple way to restore the original state
    }
}

// Track if devices are currently loading
let isLoadingDevices = false;

// All available regions
const allRegions = ['cn', 'de', 'us', 'ru', 'tw', 'sg', 'in', 'i2'];

// Load devices with streaming
async function loadDevices(autoScan = true) {
    if (!currentSession) return;
    
    // Prevent multiple simultaneous loads
    if (isLoadingDevices) {
        debug.log('Already loading devices, skipping...');
        return;
    }
    
    const btn = document.getElementById('refreshDevicesBtn');
    const devicesList = document.getElementById('devicesList');
    const devicesSection = document.getElementById('devicesSection');
    const serverSelector = document.getElementById('serverSelector');
    
    // Get selected server
    const selectedServer = serverSelector.value;
    
    // Update server info
    const serverInfo = document.getElementById('currentServerInfo');
    serverInfo.textContent = t('loadingDevicesFrom') + ' ' + selectedServer.toUpperCase() + ' ' + t('server');
    
    isLoadingDevices = true;
    btn.disabled = true;
    serverSelector.disabled = true;
    btn.innerHTML = '<span class="loading"></span> Loading...';
    devicesList.innerHTML = '';
    
    // Add progress container
    const progressContainer = document.createElement('div');
    progressContainer.className = 'progress-container';
    progressContainer.innerHTML = `
        <div class="progress-message">Initializing...</div>
        <div class="progress-bar">
            <div class="progress-bar-fill" style="width: 0%"></div>
        </div>
    `;
    devicesList.appendChild(progressContainer);
    devicesSection.classList.remove('hidden');
    
    const progressMessage = progressContainer.querySelector('.progress-message');
    const progressBar = progressContainer.querySelector('.progress-bar-fill');
    
    try {
        const response = await fetch('/api/devices-stream', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                sessionData: currentSession,
                server: selectedServer
            })
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';
        let devices = [];
        
        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            
            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split('\n');
            buffer = lines.pop() || '';
            
            for (const line of lines) {
                if (line.startsWith('data: ')) {
                    try {
                        const data = JSON.parse(line.slice(6));
                        
                        switch (data.type) {
                            case 'status':
                                progressMessage.textContent = data.message;
                                break;
                                
                            case 'progress':
                                progressMessage.textContent = data.message;
                                if (data.totalHomes) {
                                    const percent = (data.currentHome / data.totalHomes) * 100;
                                    progressBar.style.width = `${percent}%`;
                                }
                                if (data.device) {
                                    devices.push(data.device);
                                    displayDevice(data.device, devicesList);
                                }
                                break;
                                
                            case 'complete':
                                progressContainer.remove();
                                if (devices.length === 0 && data.devices) {
                                    displayDevices(data.devices);
                                }
                                const deviceCount = data.devices?.length || devices.length;
                                
                                // If no devices found and autoScan is enabled, try other regions
                                if (deviceCount === 0 && autoScan) {
                                    progressContainer.remove();
                                    await scanAllRegions(selectedServer);
                                } else {
                                    showAlert(t('foundDevicesCount') + ' ' + deviceCount + ' ' + t('deviceCount'), 'success');
                                    serverInfo.textContent = t('showingDevicesFrom') + ' ' + selectedServer.toUpperCase() + ' ' + t('serverText') + ' ' + deviceCount + ' ' + t('devicesSuffix');
                                }
                                break;
                                
                            case 'error':
                                progressContainer.remove();
                                showAlert(t('errorMessage') + ' ' + data.message, 'error');
                                break;
                        }
                    } catch (e) {
                        // debug.error('Failed to parse SSE data:', e);
                    }
                }
            }
        }
    } catch (error) {
        progressContainer.remove();
        showAlert(t('errorLoadingDevices') + ' ' + error.message, 'error');
        serverInfo.textContent = t('errorLoadingFrom') + ' ' + selectedServer.toUpperCase() + ' ' + t('serverText');
    } finally {
        isLoadingDevices = false;
        btn.disabled = false;
        serverSelector.disabled = false;
        btn.innerHTML = '🔄 ' + t('refresh');
    }
}

// Scan all regions for devices
async function scanAllRegions(currentRegion) {
    const serverInfo = document.getElementById('currentServerInfo');
    const devicesList = document.getElementById('devicesList');
    const serverSelector = document.getElementById('serverSelector');
    const btn = document.getElementById('refreshDevicesBtn');
    
    // Get regions to scan (exclude current region)
    const regionsToScan = allRegions.filter(r => r !== currentRegion);
    
    serverInfo.innerHTML = `<strong>No devices found in ${currentRegion.toUpperCase()}. Scanning other regions...</strong>`;
    
    // Disable controls during scan
    btn.disabled = true;
    serverSelector.disabled = true;
    
    let foundDevices = false;
    
    for (let i = 0; i < regionsToScan.length; i++) {
        const region = regionsToScan[i];
        serverInfo.innerHTML = `<strong>Scanning ${region.toUpperCase()} region... (${i + 1}/${regionsToScan.length})</strong>`;
        
        // Update the select box to show current scanning region
        serverSelector.value = region;
        
        try {
            const response = await fetch('/api/devices', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    sessionData: currentSession,
                    server: region
                })
            });
            
            const result = await response.json();
            
            if (result.success && result.devices && result.devices.length > 0) {
                // Found devices in this region!
                foundDevices = true;
                serverSelector.value = region; // Update selector to found region
                displayDevices(result.devices);
                showAlert(t('foundDevicesInRegion') + ' ' + region.toUpperCase() + ' ' + t('inRegion') + ' ' + result.devices.length + ' ' + t('regionUpper'), 'success');
                serverInfo.textContent = t('showingDevicesFrom') + ' ' + region.toUpperCase() + ' ' + t('serverText') + ' ' + result.devices.length + ' ' + t('devicesSuffix');
                break;
            }
        } catch (error) {
            debug.error(`Error scanning ${region}:`, error);
        }
    }
    
    if (!foundDevices) {
        serverInfo.innerHTML = '<span style="color: var(--error);">No devices found in any region. Your devices might be offline or not yet registered.</span>';
        showAlert(t('noDevicesAnyRegion'), 'warning');
        // Restore original region selection
        serverSelector.value = currentRegion;
    }
    
    // Re-enable controls
    btn.disabled = false;
    serverSelector.disabled = false;
    btn.innerHTML = '🔄 ' + t('refresh');
}

// Display single device (for streaming)
function displayDevice(device, container) {
    const deviceEl = createDeviceElement(device);
    container.appendChild(deviceEl);
}

// Display all devices
function displayDevices(devices) {
    const devicesList = document.getElementById('devicesList');
    devicesList.innerHTML = '';
    
    if (!devices || devices.length === 0) {
        devicesList.innerHTML = '<p>No devices found</p>';
        return;
    }
    
    devices.forEach(device => {
        displayDevice(device, devicesList);
    });
}

// Create device element
function createDeviceElement(device) {
    const deviceEl = document.createElement('div');
    deviceEl.className = 'device-item';
    
    // Build device info rows
    const infoRows = [];
    
    // Helper to create copyable row
    function createInfoRow(label, value, isToken = false) {
        if (!value || value === 'N/A') return '';
        const rowId = Math.random().toString(36).substr(2, 9);
        return `
            <div class="info-row">
                <dt>${label}</dt>
                <dd class="${isToken ? 'token' : ''}" onclick="copyToClipboard('${value}', '${rowId}')" id="${rowId}">
                    ${value}
                    <span class="copy-hint">Click to copy</span>
                </dd>
            </div>
        `;
    }
    
    // Always show these fields
    infoRows.push(createInfoRow(t('model'), device.model));
    infoRows.push(createInfoRow(t('did'), device.did));
    
    // Token - special styling
    if (device.token) {
        infoRows.push(createInfoRow(t('token'), device.token, true));
    }
    
    // Network info - only if available
    if (device.ip && device.ip !== 'undefined') {
        infoRows.push(createInfoRow(t('ip'), device.ip));
    }
    if (device.mac) {
        infoRows.push(createInfoRow(t('mac'), device.mac));
    }
    
    // BLE Key - only if available
    if (device.extra?.ble_key) {
        infoRows.push(createInfoRow(t('bleKey'), device.extra.ble_key, true));
    }
    
    // WiFi info - only if available
    if (device.ssid) {
        infoRows.push(createInfoRow(t('wifi'), device.ssid));
    }
    
    deviceEl.innerHTML = `
        <div class="device-header">
            <div class="device-name">${device.name || t('unknownDevice')}</div>
            <div class="device-status">
                <span class="status-dot ${device.isOnline ? 'online' : ''}"></span>
                <span>${device.isOnline ? t('online') : t('offline')}</span>
            </div>
        </div>
        <div class="device-info">
            ${infoRows.join('')}
        </div>
    `;
    
    return deviceEl;
}

// Copy to clipboard function
function copyToClipboard(text, elementId) {
    navigator.clipboard.writeText(text).then(() => {
        const element = document.getElementById(elementId);
        
        // Add visual feedback to the element
        element.style.transition = 'all 0.3s ease';
        element.style.background = 'rgba(40, 167, 69, 0.2)';
        element.style.borderColor = 'var(--success)';
        
        // Reset after animation
        setTimeout(() => {
            element.style.background = '';
            element.style.borderColor = '';
        }, 1500);
    }).catch(err => {
        // debug.error('Failed to copy:', err);
        showAlert(t('failedToCopy'), 'error');
    });
}


// Make functions available globally
window.copyToClipboard = copyToClipboard;
window.saveSession = saveSession;
window.switchAuthTab = switchAuthTab;
window.logout = logout;
window.loadDevices = loadDevices;
window.switchLanguage = switchLanguage;