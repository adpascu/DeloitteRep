create or alter view UsrVwContactAgeDays
as 
select Id as UsrId, name As UsrName, BirthDate as UsrBirthDate, 
DATEDIFF(day, BirthDate, getdate()) as UsrAgeDays
from Contact