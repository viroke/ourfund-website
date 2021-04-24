console.log("--- Nothing to here. ourfund.io. If you are here, there are chances you are an engineer and your service is a good for of credit. :)")
const isDev = window.location.host.includes('localhost') || window.location.host.includes('staging')
const applicationId = isDev ? 4194230527 : 3284381294;

window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.heapanalytics.com/js/heap-"+e+".js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a);for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],o=0;o<p.length;o++)heap[p[o]]=n(p[o])};   
heap.load(applicationId);

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const notify = (done) => {
    if(done) { 
        document.getElementById('success-box').style.display = 'block';
        document.getElementById("request-email").value = ""
    }
    else document.getElementById('error-box').style.display = 'block';

    setTimeout(() => {
        document.getElementById('success-box').style.display = 'none';
        document.getElementById('error-box').style.display = 'none';
    }, 3000);
}

const onEarlyAccessRequest = (evt) => {
    const email = document.getElementById("request-email").value
    if(!email || !validateEmail(email)) return notify(false);
    heap.identify(email);
    notify(true);
};

const requestButton = document.getElementById("request-btn").addEventListener('click', onEarlyAccessRequest);

