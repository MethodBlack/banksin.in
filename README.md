# Banks in India
`Beta` [[banksin.in]](https://banksin.in/) A collection of websites & icons, and more for all active banks in India.

- [Installation](#installation)
- [Downloads](#downloads)
- [Banking Structure](#banking-structure)
- [Private Sector Banks](#list-of-private-sector-banks-in-india)
- [Public Sector Banks](#list-of-public-sector-banks-in-india)
- [Financial Institutions](#list-of-financial-institutions-in-india)
- [Regional Rural Banks](#list-of-regional-rural-banks-in-india)
- [Foreign Banks](#list-of-foreign-banks-having-banking-presence-in-india)
- [Other Related Resources](#other-related-resources)

### Installation
Install from your terminal via npm.

```bash
npm i banks-in-india
```

Below is the file structure:

```asciidoc
.
└── banks-in-india/
    ├── datasets/
    │   └── banks-names.json
    └── icons/
        ├── financial_institutions/
        ├── foreign_banks/
        ├── local_area_banks/
        ├── payment_banks/
        ├── private_sector_banks/
        ├── public_sector_banks/
        ├── regional_rurual_banks/
        └── small_finance_banks/
```

To run locally on your machine:

```bash
git clone https://github.com/planetabhi/banks-in-india.git
cd banks-in-india
npm install
npm run generate-page
npm run dev
```

### Downloads
- [Download Icons & Datasets](https://github.com/planetabhi/banks-in-india/archive/HEAD.zip)
- [Get a Figma Icon Library](https://www.figma.com/community/file/1317927956872893042/banks-in-india)

### Banking Structure

```asciidoc
                     ┌─────────────────────────┐
                     │   Ministry of Finance   │
                     └────────────┬────────────┘
                        ┌─────────▼─────────┐
                        │        RBI        │
                        └─────────┬─────────┘
                      ┌───────────┴───────────┐
            ┌─────────▼─────────┐   ┌─────────▼─────────┐
            │  Scheduled Banks  │   │ Unscheduled Banks │
            └─────────┬─────────┘   └───────────────────┘
          ┌───────────┴───────────┐
┌─────────▼─────────┐   ┌─────────▼─────────┐
│ Commercial Banks  │   │Co-operative Banks ├─┬─▶Urban Co-operative
└───────────────────┘   └───────────────────┘ └─▶State Co-operative
          │
          │ ┌───────────────────────────┐
          ├─▶   Private Sector Banks    ├──────┬─▶Private Sector Banks
          │ └───────────────────────────┘      ├─▶Local Area Banks, LAB
          │                                    ├─▶Small Finance Banks, SFB
          │                                    └─▶Payments Banks, PB
          │ ┌───────────────────────────┐
          ├─▶    Public Sector Banks    ├──────┬─▶SBI and Associate
          │ └───────────────────────────┘      ├─▶Other Nationalized
          │ ┌───────────────────────────┐      └─▶Other Public Sector
          ├─▶   Financial Institutions  │
          │ └───────────────────────────┘
          │ ┌───────────────────────────┐      
          ├─▶    Regional Rural Banks   │
          │ └───────────────────────────┘          
          │ ┌───────────────────────────┐
          └─▶       Foreign Banks       │
            └───────────────────────────┘
```

### List of Private Sector Banks in India

#### Private Sector Banks (21)
&nbsp; | Icon | Bank Code (Based on IFSC) | Name | Website
:--- |:--- |:--- |:--- |---:
1 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/private_sector_banks/bi_axisbank.png) | `UTIB` | Axis Bank Ltd. | [axisbank.com](https://www.axisbank.com/?ref=banksin.in)
2 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/private_sector_banks/bi_bandhanbank.png) | `BDBL` | Bandhan Bank Ltd. | [bandhanbank.com](https://www.bandhanbank.com/?ref=banksin.in)
3 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/private_sector_banks/bi_csb.png) | `CSBK` | CSB Bank Limited | [csb.co.in](http://www.csb.co.in/?ref=banksin.in)
4 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/private_sector_banks/bi_cityunionbank.png) | `CIUB` | City Union Bank Ltd. | [cityunionbank.com](https://www.cityunionbank.com/?ref=banksin.in)
5 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/private_sector_banks/bi_dcbbank.png) | `DCBL` | DCB Bank Ltd. | [dcbbank.com](https://www.dcbbank.com/?ref=banksin.in)
6 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/private_sector_banks/bi_dhanbank.png) | `DLXB` | Dhanlaxmi Bank Ltd. | [dhanbank.com](https://www.dhanbank.com/?ref=banksin.in)
7 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/private_sector_banks/bi_federalbank.png) | `FDRL` | Federal Bank Ltd. | [federalbank.co.in](https://www.federalbank.co.in/?ref=banksin.in)
8 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/private_sector_banks/bi_hdfcbank.png) | `HDFC` | HDFC Bank Ltd | [hdfcbank.com](https://www.hdfcbank.com/?ref=banksin.in)
9 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/private_sector_banks/bi_icicibank.png) | `ICIC` | ICICI Bank Ltd. | [icicibank.com](https://www.icicibank.com/?ref=banksin.in)
10 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/private_sector_banks/bi_indusind.png) | `INDB` | IndusInd Bank Ltd | [indusind.com](https://www.indusind.com/?ref=banksin.in)
11 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/private_sector_banks/bi_idfcbank.png) | `IDFB` | IDFC FIRST Bank Limited | [idfcbank.com](https://www.idfcbank.com/)
12 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/private_sector_banks/bi_jkbank.png) | `JAKA` | Jammu & Kashmir Bank Ltd. | [jkbank.com](https://www.jkbank.com/?ref=banksin.in)
13 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/private_sector_banks/bi_karnatakabank.png) | `KARB` | Karnataka Bank Ltd. | [karnatakabank.com](https://karnatakabank.com/?ref=banksin.in)
14 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/private_sector_banks/bi_kvb.png) | `KVBL` | Karur Vysya Bank Ltd. | [kvb.co.in](http://www.kvb.co.in/?ref=banksin.in)
15 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/private_sector_banks/bi_kotak.png) | `KKBK` | Kotak Mahindra Bank Ltd | [kotak.com](https://www.kotak.com/?ref=banksin.in)
16 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/private_sector_banks/bi_nainitalbank.png) | `NTBL` | Nainital Bank Ltd. | [nainitalbank.co.in](http://www.nainitalbank.co.in/?ref=banksin.in)
17 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/private_sector_banks/bi_rblbank.png) | `RATN` | RBL Bank Ltd. | [rblbank.com](https://www.rblbank.com/?ref=banksin.in)
18 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/private_sector_banks/bi_southindianbank.png) | `SIBL` | South Indian Bank Ltd. | [southindianbank.com](https://www.southindianbank.com/?ref=banksin.in)
19 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/private_sector_banks/bi_tmb.png) | `TMBL` | Tamilnad Mercantile Bank Ltd. | [tmb.in](http://www.tmb.in/?ref=banksin.in)
20 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/private_sector_banks/bi_yesbank.png) | `YESB` | YES Bank Ltd. | [yesbank.in](https://www.yesbank.in/?ref=banksin.in)
21 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/private_sector_banks/bi_idbi.png) | `IBKL` | IDBI Bank Limited | [idbi.com](https://www.idbi.com/?ref=banksin.in)

#### Local Area Banks or LAB (2)
&nbsp; | Icon | Bank Code (Based on IFSC) | Name | Website
:--- |:--- |:--- |:--- |---:
1 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/local_area_banks/bi_coastalareabank.png) | `COAS` | Coastal Local Area Bank Ltd | [coastalareabank.com](http://www.coastalareabank.com/?ref=banksin.in)
2 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/local_area_banks/bi_kbsbankindia.png) | `KBSX` | Krishna Bhima Samruddhi LAB Ltd | [kbsbankindia.com](http://www.kbsbankindia.com/?ref=banksin.in)

#### Small Finance Banks or SFB (12)
&nbsp; | Icon | Bank Code (Based on IFSC) | Name | Website
:--- |:--- |:--- |:--- |---:
1 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/small_finance_banks/bi_aubank.png) | `AUBL` | Au Small Finance Bank Ltd. | [aubank.in](https://www.aubank.in/?ref=banksin.in)
2 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/small_finance_banks/bi_capitalbank.png) | `CLBL` | Capital Small Finance Bank Ltd. | [capitalbank.co.in](http://www.capitalbank.co.in/?ref=banksin.in)
3 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/small_finance_banks/bi_fincarebank.png) | `FSFB` | Fincare Small Finance Bank Ltd. | [fincarebank.com](http://fincarebank.com/?ref=banksin.in)
4 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/small_finance_banks/bi_equitasbank.png) | `ESFB` | Equitas Small Finance Bank Ltd | [equitasbank.com](https://www.equitasbank.com/?ref=banksin.in)
5 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/small_finance_banks/bi_esafbank.png) | `ESMF` | ESAF Small Finance Bank Ltd. | [esafbank.com](https://www.esafbank.com/?ref=banksin.in)
6 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/small_finance_banks/bi_suryodaybank.png) | `SURY` | Suryoday Small Finance Bank Ltd. | [suryodaybank.com](https://www.suryodaybank.com/?ref=banksin.in)
7 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/small_finance_banks/bi_ujjivansfb.png) | `UJVN` | Ujjivan Small Finance Bank Ltd. | [ujjivansfb.in](https://www.ujjivansfb.in/?ref=banksin.in)
8 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/small_finance_banks/bi_utkarsh.png) | `UTKS` | Utkarsh Small Finance Bank Ltd. | [utkarsh.bank](https://www.utkarsh.bank/?ref=banksin.in)
9 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/small_finance_banks/bi_nesfb.png) | `NESF` | North East Small Finance Bank Ltd | [nesfb.com](https://nesfb.com/?ref=banksin.in)
10 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/small_finance_banks/bi_janabank.png) | `JSFB` | Jana Small Finance Bank Ltd. | [janabank.com](https://www.janabank.com/?ref=banksin.in)
11 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/small_finance_banks/bi_shivalikbank.png) | `SMCB` | Shivalik Small Finance Bank Ltd | [shivalikbank.com](https://shivalikbank.com/?ref=banksin.in)
12 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/small_finance_banks/bi_theunitybank.png) | `UNBA` | Unity Small Finance Bank Ltd | [theunitybank.com](https://theunitybank.com/?ref=banksin.in)

#### Payments Banks or PB (6)
&nbsp; | Icon | Bank Code (Based on IFSC) | Name | Website
:--- |:--- |:--- |:--- |---:
1 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/payments_banks/bi_airtel.png) | `AIRP` | Airtel Payments Bank Ltd | [airtel.in/bank](https://www.airtel.in/bank/?ref=banksin.in)
2 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/payments_banks/bi_ippbonline.png) | `IPOS` | India Post Payments Bank Ltd | [ippbonline.com](https://ippbonline.com/web/ippb/?ref=banksin.in)
3 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/payments_banks/bi_finobank.png) | `FINO` | FINO Payments Bank Ltd | [finobank.com](https://www.finobank.com/?ref=banksin.in)
4 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/payments_banks/bi_paytmbank.png) | `PYTM` | Paytm Payments Bank Ltd | [paytmbank.com](http://www.paytmbank.com/?ref=banksin.in)
5 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/payments_banks/bi_jiopaymentsbank.png) | `JIOP` | Jio Payments Bank Ltd | [jiopaymentsbank.com](https://www.jiopaymentsbank.com/?ref=banksin.in)
6 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/payments_banks/bi_nsdlbank.png) | `NSPB` | NSDL Payments Bank Limited | [nsdlbank.com](https://nsdlbank.com/?ref=banksin.in)
<div align="right" class="toc-link">
    <a href="#banks-in-india">↑ Back to Top</a>
</div>

### List of Public Sector Banks in India
#### Public Sector Banks (12)
&nbsp; | Icon | Bank Code (Based on IFSC) | Name | Website
:--- |:--- |:--- |:--- |---:
1 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/public_sector_banks/bi_bankofbaroda.png) | `BARB` | Bank of Baroda | [bankofbaroda.co.in](https://www.bankofbaroda.co.in/?ref=banksin.in)
2 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/public_sector_banks/bi_bankofindia.png) | `BKID` | Bank of India | [bankofindia.co.in](https://www.bankofindia.co.in/?ref=banksin.in)
3 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/public_sector_banks/bi_bankofmaharashtra.png) | `MAHB` | Bank of Maharashtra | [bankofmaharashtra.in](https://www.bankofmaharashtra.in/?ref=banksin.in)
4 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/public_sector_banks/bi_canarabank.png) | `CNRB` | Canara Bank | [canarabank.com](https://www.canarabank.com/?ref=banksin.in)
5 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/public_sector_banks/bi_centralbankofindia.png) | `CBIN` | Central Bank of India | [centralbankofindia.co.in](https://www.centralbankofindia.co.in/?ref=banksin.in)
6 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/public_sector_banks/bi_indianbank.png) | `IDIB` | Indian Bank | [indianbank.in](http://www.indianbank.in/?ref=banksin.in)
7 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/public_sector_banks/bi_iob.png) | `IOBA` | Indian Overseas Bank | [iob.in](https://www.iob.in/?ref=banksin.in)
8 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/public_sector_banks/bi_punjabandsindbank.png) | `PSIB` | Punjab & Sind Bank | [punjabandsindbank.co.in](https://punjabandsindbank.co.in/?ref=banksin.in)
9 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/public_sector_banks/bi_pnbindia.png) | `PUNB` | Punjab National Bank | [pnbindia.in](https://www.pnbindia.in/)
10 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/public_sector_banks/bi_sbi.png) | `SBIN` | State Bank of India | [sbi.co.in](https://www.sbi.co.in/?ref=banksin.in)
11 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/public_sector_banks/bi_ucobank.png) | `UCBA` | UCO Bank | [ucobank.com](https://www.ucobank.com/?ref=banksin.in)
12 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/public_sector_banks/bi_unionbankonline.png) | `UBIN` | Union Bank of India | [unionbankonline.co.in](https://www.unionbankonline.co.in/?ref=banksin.in)

<div align="right" class="toc-link">
    <a href="#banks-in-india">↑ Back to Top</a>
</div>

### List of Financial Institutions in India
#### Financial Institutions (4)
&nbsp; | Icon | Bank Code (Based on IFSC) | Name | Website
:--- |:--- |:--- |:--- |---:
1 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/financial_institutions/bi_nabard.png) | `NBRD` | National Bank for Agriculture and Rural Development | [nabard.org](http://www.nabard.org/?ref=banksin.in)
2 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/financial_institutions/bi_eximbankindia.png) | `EIBI` | Export-Import Bank of India | [eximbankindia.in](https://www.eximbankindia.in/?ref=banksin.in)
3 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/financial_institutions/bi_nabard.png) | `HDFC` | National Housing Bank | [nhb.org.in](https://nhb.org.in/?ref=banksin.in)
4 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/financial_institutions/bi_sidbi.png) | `SIDB` | Small Industries Development Bank of India | [sidbi.in](https://www.sidbi.in/?ref=banksin.in)

<div align="right" class="toc-link">
    <a href="#banks-in-india">↑ Back to Top</a>
</div>

### List of Regional Rural Banks in India 
#### Regional Rural Banks or RRB (43)
&nbsp; | Icon | Bank Code (Based on IFSC) | Name | Website
:--- |:--- |:--- |:--- |---:
1 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/regional_rural_banks/bi_agvbank.png) | `AGVX` | Assam Gramin Vikash Bank | [agvbank.co.in](http://www.agvbank.co.in/?ref=banksin.in)
2 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/regional_rural_banks/bi_apgvbank.png) | `APGV` | Andhra Pradesh Grameena Vikas Bank | [apgvbank.in](https://www.apgvbank.in/?ref=banksin.in)
3 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/regional_rural_banks/bi_apgb.png) | `APGB` | Andhra Pragathi Grameena Bank | [apgb.in](http://www.apgb.in/?ref=banksin.in)
4 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/regional_rural_banks/bi_apruralbank.png) | `APRX` | Arunachal Pradesh Rural Bank | [apruralbank.co.in](https://www.apruralbank.co.in/?ref=banksin.in)
5 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/regional_rural_banks/bi_aryavart-rrb.png) | `ARYX` | Aryavart Bank | [aryavart-rrb.com](http://www.aryavart-rrb.com/?ref=banksin.in)
6 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/regional_rural_banks/bi_bgvb.png) | `BGVX` | Bangiya Gramin Vikash Bank | [bgvb.in](https://bgvb.in/?ref=banksin.in)
7 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/regional_rural_banks/bi_bggb.png) | `BGGX` | Baroda Gujarat Gramin Bank | [bggb.in](http://www.bggb.in/?ref=banksin.in)
8 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/regional_rural_banks/bi_brkgb.png) | `BRGX` | Baroda Rajasthan Kshetriya Gramin Bank | [brkgb.com](http://www.brkgb.com/?ref=banksin.in)
9 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/regional_rural_banks/bi_barodaupbank.png) | `BUGX` | Baroda UP Bank | [barodaupbank.in](https://barodaupbank.in/?ref=banksin.in)
10 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/regional_rural_banks/bi_cggb.png) | `CGGX` | Chaitanya Godavari GB | [cggb.in](http://www.cggb.in/?ref=banksin.in)
11 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/regional_rural_banks/bi_cgbank.png) | `CRGB` | Chhattisgarh Rajya Gramin Bank | [cgbank.in](http://www.cgbank.in/?ref=banksin.in)
12 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/regional_rural_banks/bi_dbgb.png) | `MBGX` | Dakshin Bihar Gramin Bank | [dbgb.in](http://www.dbgb.in/?ref=banksin.in)
13 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/regional_rural_banks/bi_edb.png) | `EDBX` | Ellaquai Dehati Bank | [edb.org.in](https://www.edb.org.in/?ref=banksin.in)
14 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/regional_rural_banks/bi_hpgb.png) | `HMBX` | Himachal Pradesh Gramin Bank | [hpgb.in](http://www.hpgb.in/?ref=banksin.in)
15 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/regional_rural_banks/bi_jkgb.png) | `XJKG` | J&K Grameen Bank | [jkgb.in](http://www.jkgb.in/?ref=banksin.in)
16 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/regional_rural_banks/bi_jrgb.png) | `VGBX` | Jharkhand Rajya Gramin Bank | [jrgbank.in](http://jrgbank.in/?ref=banksin.in)
17 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/regional_rural_banks/bi_karnatakagraminbank.png) | `PKGB` | Karnataka Gramin Bank | [karnatakagraminbank.com](http://www.karnatakagraminbank.com/?ref=banksin.in)
18 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/regional_rural_banks/bi_kvgbank.png) | `KVGB` | Karnataka Vikas Gramin Bank | [kvgbank.com](http://www.kvgbank.com/?ref=banksin.in)
19 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/regional_rural_banks/bi_keralagbank.png) | `KLGB` | Kerala Gramin Bank | [keralagbank.com](http://www.keralagbank.com/?ref=banksin.in)
20 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/regional_rural_banks/bi_mpgb.png) | `CMPX` | Madhya Pradesh Gramin Bank | [mpgb.co.in](https://mpgb.co.in/?ref=banksin.in)
21 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/regional_rural_banks/bi_mgbank.png) | `MADX` | Madhyanchal Gramin Bank | [mgbank.co.in](http://www.mgbank.co.in/?ref=banksin.in)
22 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/regional_rural_banks/bi_mahagramin.png) | `MAHG` | Maharashtra Gramin Bank | [mahagramin.in](https://www.mahagramin.in/?ref=banksin.in)
23 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/regional_rural_banks/bi_manipurruralbank.png) | `MRBX` | Manipur Rural Bank | [manipurruralbank.com](http://www.manipurruralbank.com/?ref=banksin.in)
24 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/regional_rural_banks/bi_meghalayaruralbank.png) | `MERX` | Meghalaya Rural Bank | [meghalayaruralbank.co.in](http://www.meghalayaruralbank.co.in/?ref=banksin.in)
25 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/regional_rural_banks/bi_mizoramruralbank.png) | `MZRX` | Mizoram Rural Bank | [mizoramruralbank.in](https://www.mizoramruralbank.in/?ref=banksin.in)
26 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/regional_rural_banks/bi_nagalandruralbank.png) | `NAGX` | Nagaland Rural Bank | [nagalandruralbank.com](http://www.nagalandruralbank.com/?ref=banksin.in)
27 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/regional_rural_banks/bi_odishabank.png) | `ODGB` | Odisha Gramya Bank | [odishabank.in](http://www.odishabank.in/?ref=banksin.in)
28 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/regional_rural_banks/bi_pbgbank.png) | `PASX` | Paschim Banga Gramin Bank | [pbgbank.com](http://www.pbgbank.com/?ref=banksin.in)
29 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/regional_rural_banks/bi_prathamaupbank.png) | `SUBX` | Prathama U.P. Gramin Bank | [prathamaupbank.com](http://www.prathamaupbank.com/?ref=banksin.in)
30 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/regional_rural_banks/bi_puduvaibharathiargramabank.png) | `PBGX` | Puduvai Bharathiar Grama Bank | [puduvaibharathiargramabank.in](http://www.puduvaibharathiargramabank.in/?ref=banksin.in)
31 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/regional_rural_banks/bi_pgb.png) | `PUGX` | Punjab Gramin Bank | [pgb.org.in](http://www.pgb.org.in/?ref=banksin.in)
32 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/regional_rural_banks/bi_rmgb.png) | `RMGB` | Rajasthan Marudhara Gramin Bank | [rmgb.in](http://www.rmgb.in/?ref=banksin.in)
33 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/regional_rural_banks/bi_saptagirigrameenabank.png) | `SPBX` | Saptagiri Grameena Bank | [saptagirigrameenabank.in](http://www.saptagirigrameenabank.in/?ref=banksin.in)
34 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/regional_rural_banks/bi_shgb.png) | `HGBX` | Sarva Haryana Gramin Bank | [shgb.co.in](https://shgb.co.in/?ref=banksin.in)
35 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/regional_rural_banks/bi_sgbrrb.png) | `SGBA` | Saurashtra Gramin Bank | [sgbrrb.org](https://sgbrrb.org/?ref=banksin.in)
36 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/regional_rural_banks/bi_tamilnadugramabank.png) | `IDIB` | Tamil Nadu Grama Bank | [tamilnadugramabank.com](http://www.tamilnadugramabank.com/?ref=banksin.in)
37 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/regional_rural_banks/bi_tgbhyd.png) | `DGBX` | Telangana Grameena Bank | [tgbhyd.in](http://www.tgbhyd.in/?ref=banksin.in)
38 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/regional_rural_banks/bi_tripuragraminbank.png) | `TGBX` | Tripura Gramin Bank | [tripuragraminbank.org](http://www.tripuragraminbank.org/?ref=banksin.in)
39 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/regional_rural_banks/bi_ubgb.png) | `UBGX` | Uttar Bihar Gramin Bank | [ubgb.in](http://www.ubgb.in/?ref=banksin.in)
40 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/regional_rural_banks/bi_utkalgrameenbank.png) | `UGBX` | Utkal Grameen Bank | [utkalgrameenbank.co.in](http://www.utkalgrameenbank.co.in/?ref=banksin.in)
41 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/regional_rural_banks/bi_ubkgb.png) | `UKGX` | Uttarbanga Kshetriya Gramin Bank | [ubkgb.org](http://www.ubkgb.org/?ref=banksin.in)
42 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/regional_rural_banks/bi_vkgb.png) | `BKID` | Vidharbha Konkan Gramin Bank | [vkgb.co.in](http://www.vkgb.co.in/?ref=banksin.in)
43 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/regional_rural_banks/bi_uttarakhandgraminbank.png) | `UTGX` | Uttarakhand Gramin Bank | [uttarakhandgraminbank.com](http://www.uttarakhandgraminbank.com/?ref=banksin.in)

<div align="right" class="toc-link">
    <a href="#banks-in-india">↑ Back to Top</a>
</div>

### List of Foreign Banks Having Banking Presence in India
#### Foreign Banks (44)
&nbsp; | Icon | Bank Code (Based on IFSC) | Name | Website
:--- |:--- |:--- |:--- |---:
1 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/foreign_banks/bi_abbl.png) | `XXXX` | AB Bank Ltd. | [abbl.com](http://abbl.com/mumbai-branch/?ref=banksin.in)
2 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/foreign_banks/bi_americanexpress.png) | `XXXX` | American Express Banking Corporation | [americanexpress.com](https://www.americanexpress.com/in/?ref=banksin.in)
3 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/foreign_banks/bi_anz.png) | `XXXX` | Australia and New Zealand Banking Group Ltd. | [anz.com](http://www.anz.com/india/en/Corporate/?ref=banksin.in)
4 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/foreign_banks/bi_barclays.png) | `XXXX` | Barclays Bank Plc. | [barclays.in](https://www.barclays.in/?ref=banksin.in)
5 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/foreign_banks/bi_bofa-india.png) | `XXXX` | Bank of America | [bofa-india.com](http://bofa-india.com/?ref=banksin.in)
6 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/foreign_banks/bi_bbkindia.png) | `XXXX` | Bank of Bahrain & Kuwait B.S.C. | [bbkindia.com](https://www.bbkindia.com/?ref=banksin.in)
7 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/foreign_banks/bi_bankofceylon.png) | `XXXX` | Bank of Ceylon | [bankofceylon.in](https://www.boc.lk/?ref=banksin.in)
8 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/foreign_banks/bi_bankofchina.png) | `XXXX` | Bank of China | [bankofchina.com](https://www.bankofchina.com/in/en/aboutus/?ref=banksin.in)
9 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/foreign_banks/bi_scotiabank.png) | `XXXX` | Bank of Nova Scotia | [scotiabank.com](http://www.scotiabank.com/global/en/0,,6176,00.html)
10 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/foreign_banks/bi_bnpparibas.png) | `XXXX` | BNP Paribas | [bnpparibas.co.in](http://www.bnpparibas.co.in/en/?ref=banksin.in)
11 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/foreign_banks/bi_citibank.png) | `XXXX` | Citibank N.A. | [citibank.co.in](https://www.citibank.co.in/?ref=banksin.in)
12 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/foreign_banks/bi_rabobank.png) | `XXXX` | Cooperatieve Rabobank U.A./ Coöperatieve Centrale Raiffeisen-Boerenleenbank B.A. | [rabobank.com](https://www.rabobank.com/en/locate-us/asia-pacific/india/cooperatieve-rabobank-ua.html)
13 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/foreign_banks/bi_ca-cib.png) | `XXXX` | Credit Agricole Corporate & Investment Bank | [ca-cib.com](https://www.ca-cib.com/our-global-presence/asia-pacific/india/)
14 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/foreign_banks/bi_credit-suisse.png) | `XXXX` | Credit Suisse AG | [credit-suisse.com](https://www.credit-suisse.com/in/en/investment-banking-apac/investment-banking-in-india/mumbai-bank-branch.htm)
15 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/foreign_banks/bi_chinatrustindia.png) | `XXXX` | CTBC Bank Co., Ltd. | [chinatrustindia.com](http://www.chinatrustindia.com/?ref=banksin.in)
16 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/foreign_banks/bi_dbs.png) | `XXXX` | DBS Bank India Limited | [dbs.com](https://www.dbs.com/india/default.page/?ref=banksin.in)
17 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/foreign_banks/bi_deutschebank.png) | `XXXX` | Deutsche Bank A.G. | [deutschebank.co.in](http://www.deutschebank.co.in/?ref=banksin.in)
18 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/foreign_banks/bi_dohabank.png) | `XXXX` | Doha Bank Q.P.S.C | [dohabank.co.in](http://dohabank.co.in/?ref=banksin.in)
19 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/foreign_banks/bi_emiratesnbd.png) | `XXXX` | Emirates NBD Bank PJSC | [emiratesnbd.co.in](https://www.emiratesnbd.co.in/?ref=banksin.in)
20 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/foreign_banks/bi_bankfab.png) | `XXXX` | First Abu Dhabi Bank PJSC | [bankfab.com](https://www.bankfab.com/en-in/?ref=banksin.in)
21 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/foreign_banks/bi_firstrand.png) | `XXXX` | FirstRand Bank Limited | [firstrand.co.in](https://www.firstrand.co.in/?ref=banksin.in)
22 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/foreign_banks/bi_hsbc.png) | `XXXX` | Hong Kong and Shanghai Banking Corporation Limited | [hsbc.co.in](https://www.hsbc.co.in/1/2/homepage/)
23 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/foreign_banks/bi_icbcindia.png) | `XXXX` | Industrial & Commercial Bank of China Ltd. | [icbcindia.com](http://www.icbcindia.com/?ref=banksin.in)
24 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/foreign_banks/bi_globalibk.png) | `XXXX` | Industrial Bank of Korea | [in.globalibk.com](https://in.globalibk.com/iview/03/CMIBMAN0000/?ref=banksin.in)
25 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/foreign_banks/bi_jpmorgan.png) | `XXXX` | J.P. Morgan Chase Bank N.A. | [jpmorgan.com](https://www.jpmorgan.com/IN/en/about-us/?ref=banksin.in)
26 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/foreign_banks/bi_vtbindia.png) | `XXXX` | JSC VTB Bank | [vtbindia.com](http://www.vtbindia.com/?ref=banksin.in)
27 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/foreign_banks/bi_1qbank.png) | `XXXX` | KEB Hana Bank | [global.1qbank.com](https://global.1qbank.com/lounge/chennai/et/main.html)
28 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/foreign_banks/bi_kbfg.png) | `XXXX` | Kookmin Bank | [kbfg.com](https://www.kbfg.com/Eng/about/global/asia/india.jsp/?ref=banksin.in)
29 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/foreign_banks/bi_krungthai.png) | `XXXX` | Krung Thai Bank Public Co. Ltd.[^1] | [krungthai.com](https://krungthai.com/th/content/mumbai-branch/)
30 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/foreign_banks/bi_mashreqbank.png) | `XXXX` | Mashreq bank PSC | [mashreqbank.com](https://www.mashreqbank.com/uae/en/international-banking/network/india/?ref=banksin.in)
31 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/foreign_banks/bi_mizuhobank.png) | `XXXX` | Mizuho Bank Ltd. | [mizuhobank.com](https://www.mizuhobank.com/india/index.html)
32 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/foreign_banks/bi_mufg.png) | `XXXX` | MUFG Bank, Ltd. | [bk.mufg.jp](http://www.bk.mufg.jp/global/globalnetwork/asiaoceania/mumbai.html)
33 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/foreign_banks/bi_natwestmarkets.png) | `XXXX` | NatWest Markets Plc | [natwestmarkets.in](https://www.natwestmarkets.in/index.html)
34 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/foreign_banks/bi_maybank.png) | `XXXX` | PT Bank Maybank Indonesia TBK | [maybank.co.in](https://www.maybank.co.in)
35 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/foreign_banks/bi_qnb.png) | `XXXX` | Qatar National Bank (Q.P.S.C.) | [qnb.com](https://www.qnb.com/sites/qnb/qnbindia/page/en/en-home.html)
36 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/foreign_banks/bi_sberbank.png) | `XXXX` | Sberbank | [sberbank.co.in](http://www.sberbank.co.in/?ref=banksin.in)
37 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/foreign_banks/bi_sbmbank.png) | `XXXX` | SBM Bank (India) Limited | [sbmbank.co.in](https://www.sbmbank.co.in/?ref=banksin.in)
38 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/foreign_banks/bi_shinhanglobal.png) | `XXXX` | Shinhan Bank | [in.shinhanglobal.com](https://in.shinhanglobal.com/?ref=banksin.in)
39 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/foreign_banks/bi_societegenerale.png) | `XXXX` | Societe Generale India | [societegenerale.asia](https://www.societegenerale.asia/en/country-details/country/india-2/?ref=banksin.in)
40 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/foreign_banks/bi_sonalibank.png) | `XXXX` | Sonali Bank Ltd.[^2] | [sonalibank.in](http://www.sonalibank.in/?ref=banksin.in)
41 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/foreign_banks/bi_sc.png) | `XXXX` | Standard Chartered Bank | [sc.com](https://www.sc.com/in/?ref=banksin.in)
42 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/foreign_banks/bi_smbc.png) | `XXXX` | Sumitomo Mitsui Banking Corporation | [smbc.co.jp](http://www.smbc.co.jp/global/india/?ref=banksin.in)
43 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/foreign_banks/bi_uobgroup.png) | `XXXX` | United Overseas Bank Limited | [uobgroup.com/in](https://www.uobgroup.com/in/?ref=banksin.in)
44 | ![](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/icons/foreign_banks/bi_wooribank.png) | `XXXX` | Woori Bank | [go.wooribank.com](https://go.wooribank.com/in/ib/main/IbMain.do)

<div align="right" class="toc-link">
    <a href="#banks-in-india">↑ Back to Top</a>
</div>

<div class="footnote">

[^1]: Krung Thai Bank Public Co. Ltd does not maintain any Indian specific website or page. Therefore, there is no link to provide. However, on global website, it provides details of branch presence in India which can be seen through the indicated link.

<br><br>

[^2]: Sonali Bank website link has been confirmed by the bank. However, the bank has informed that the website is not yet complete and is under development and up gradation.

</div>

### Other Related Resources
- [RBI Listing](https://www.rbi.org.in/scripts/banklinks.aspx)
- [NEFT IFSCs from RBI](https://rbidocs.rbi.org.in/rdocs/content/docs/68774.xlsx)
- [RTGS IFSCs from RBI](https://rbidocs.rbi.org.in/rdocs/RTGS/DOCs/RTGEB0815.xlsx)
- [List of Banks in India](https://www.rbi.org.in/commonman/english/scripts/banksinindia.aspx)
- [Banks Live on NACH](https://www.npci.org.in/what-we-do/nach/live-members/live-banks)
- [Banks Live on IMPS](https://www.npci.org.in/what-we-do/imps/live-members)
- [Banks Live on AutoPay](https://www.npci.org.in/what-we-do/autopay/list-of-banks-and-apps-live-on-autopay)
- [RuPay Live Members](https://www.npci.org.in/what-we-do/rupay/live-members)
- [Merged banks IFSC and MICR Codes](https://www.npci.org.in/PDF/npci/ifsc-and-micr-codes/Merged-banks-IFSC-and-MICR.xlsx)
- [Blocked Banks on NACH](https://www.npci.org.in/what-we-do/nach/live-members/blocked-banks)

### About
This project is licensed under the [GNU License](https://cdn.jsdelivr.net/npm/banks-in-india@0.1.5/LICENSE) · Brought to you by **Abhimanyu Rana** - [@planetabhi](https://planetabhi.netlify.app/).