import RefreshPINTotemService from './services/RefreshPINTotemService';

const refreshPINTotem = new RefreshPINTotemService();

await refreshPINTotem.execute();

setTimeout(refreshPIN, 10 * 1000);

export default refreshPIN;
