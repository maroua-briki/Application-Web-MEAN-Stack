let _config = require('../config/_az_vm.json');
const fs = require('fs');
class AzureVmConfig {
    constructor(
        clientId,
        clientSecret,
        username,
        password,
        location,
        prefix,
        vmsize,
        vmNumber,
        offer,
        sku,
        version,
        subscriptionId,
        tenantId
    ){
        this.projectName="Test-infra-azure-VM";
        this.stackName="dev";
        this.passPhrase="test";
        this.clientId=clientId || "NO_VALUE";
        this.clientSecret=clientSecret || "NO_VALUE";
        this.username=username || "NO_VALUE";
        this.password=password || "NO_VALUE";
        this.location=location || "NO_VALUE";
        this.prefix=prefix || "NO_VALUE";
        this.vmsize=vmsize || "NO_VALUE";
        this.vmNumber=vmNumber || 0;
        this.offer=offer || "NO_VALUE";
        this.sku=sku || "NO_VALUE";
        this.version = version || "latest";
        this.subscriptionId = subscriptionId || "NO_VALUE";
        this.tenantId = tenantId || "NO_VALUE";
    }
    updateClientId(clientId){this.clientId=clientId;_config.clientId=clientId;fs.writeFileSync('config/_az_vm.json',JSON.stringify(_config));}
    updateClientSecret(clientSecret){this.clientSecret=clientSecret;_config.clientSecret=clientSecret;fs.writeFileSync('config/_az_vm.json',JSON.stringify(_config));}
    updateUserName(username){this.username=username;_config.username=username;fs.writeFileSync('config/_az_vm.json',JSON.stringify(_config));}
    updatePassword(password){this.password=password;_config.password=password;fs.writeFileSync('config/_az_vm.json',JSON.stringify(_config));}
    updateLocation(location){this.location=location;_config.location=location;fs.writeFileSync('config/_az_vm.json',JSON.stringify(_config));}
    updatePrefix(prefix){this.prefix=prefix;_config.prefix=prefix;fs.writeFileSync('config/_az_vm.json',JSON.stringify(_config));}
    updateVmSize(vmsize){this.vmsize=vmsize;_config.vmsize=vmsize;fs.writeFileSync('config/_az_vm.json',JSON.stringify(_config));}
    updateVmNumber(vmNumber){this.vmNumber=vmNumber;_config.vmNumber=vmNumber;fs.writeFileSync('config/_az_vm.json',JSON.stringify(_config));}
    updateOffer(offer){this.offer=offer;_config.offer=offer;fs.writeFileSync('config/_az_vm.json',JSON.stringify(_config));}
    updateSku(sku){this.sku=sku;_config.sku=sku;fs.writeFileSync('config/_az_vm.json',JSON.stringify(_config));}
    updateVersion(version){this.version=version;_config.version=version;fs.writeFileSync('config/_az_vm.json',JSON.stringify(_config));}
    updateSubscriptionId(subscriptionId){this.subscriptionId=subscriptionId;_config.subscriptionId=subscriptionId;fs.writeFileSync('config/_az_vm.json',JSON.stringify(_config));}
    updateTenantId(tenantId){this.tenantId=tenantId;_config.tenantId=tenantId;fs.writeFileSync('config/_az_vm.json',JSON.stringify(_config));}

}
module.exports= AzureVmConfig;
