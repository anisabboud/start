DEPARTMENTS = ['AASP', 'AAST', 'AGNR', 'AMSC', 'AMST', 'ANSC', 'ANTH', 'AOSC', 'ARAB', 'ARCH', 'AREC', 'ARHU', 'ARMY', 'ARSC', 'ARTH', 'ARTT', 'ASTR', 'BCHM', 'BIOE', 'BIOL', 'BIOM', 'BIPH', 'BMGT', 'BSCI', 'BSCV', 'BSGC', 'BSOS', 'BSST', 'BUAC', 'BUDT', 'BUFN', 'BULM', 'BUMK', 'BUMO', 'BUSI', 'CBMG', 'CCJS', 'CHBE', 'CHEM', 'CHIN', 'CHPH', 'CLAS', 'CLFS', 'CMLT', 'CMSC', 'COMM', 'CONS', 'CPET', 'CPGH', 'CPMS', 'CPPL', 'CPSA', 'CPSD', 'CPSF', 'CPSG', 'CPSN', 'CPSP', 'CPSS', 'DANC', 'ECON', 'EDCI', 'EDCP', 'EDHD', 'EDHI', 'EDMS', 'EDPS', 'EDSP', 'EDUC', 'ENAE', 'ENCE', 'ENCH', 'ENCO', 'ENEE', 'ENES', 'ENFP', 'ENGL', 'ENMA', 'ENME', 'ENNU', 'ENPM', 'ENPP', 'ENRE', 'ENSE', 'ENSP', 'ENST', 'ENTM', 'ENTS', 'EPIB', 'EXST', 'FILM', 'FIRE', 'FMSC', 'FOLA', 'FREN', 'GEMS', 'GEOG', 'GEOL', 'GERM', 'GREK', 'GVPT', 'HACS', 'HDCC', 'HEBR', 'HEIP', 'HESI', 'HESP', 'HHUM', 'HISP', 'HIST', 'HLSA', 'HLSC', 'HLTH', 'HONR', 'IMMR', 'INAG', 'INFM', 'INST', 'ISRL', 'ITAL', 'JAPN', 'JOUR', 'JWST', 'KNES', 'KORA', 'LARC', 'LASC', 'LATN', 'LBSC', 'LGBT', 'LING', 'MAIT', 'MATH', 'MEES', 'MIEH', 'MLAW', 'MOCB', 'MUED', 'MUSC', 'NACS', 'NFSC', 'NIAV', 'PERS', 'PHIL', 'PHYS', 'PLSC', 'PORT', 'PSYC', 'PUAF', 'RDEV', 'RELS', 'RUSS', 'SLAA', 'SLLC', 'SOCY', 'SPAN', 'SPHL', 'STAT', 'SURV', 'TDPS', 'THET', 'TLPL', 'UMEI', 'UNIV', 'URSP', 'USLT', 'VMSC', 'WMST']

from urlparse import urlparse

from lxml import html
import requests
import html2text
import codecs


def Scrape(url, path, exclude_path=None):
  page = requests.get(url)
  tree = html.fromstring(page.text)
  if exclude_path:
    for elem in tree.xpath(exclude_path):
      elem.getparent().remove(elem)
  result = tree.xpath(path)
  htmlstr = ''.join([html.tostring(r) for r in result])
  text = converter.handle(htmlstr)

  return text

print Scrape('https://ntst.umd.edu/soc/201501/CMSC')