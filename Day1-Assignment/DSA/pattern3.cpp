/*
1
2


  *
* * *



2
4
7

      * 
    * * * 
  * * * * * 
* * * * * * * 
            * 
          * * * 
        * * * * * 
      * * * * * * * 
    * * * * * * * * * 
  * * * * * * * * * * * 
* * * * * * * * * * * * * 


*/


#include <bits/stdc++.h>
using namespace std;

int main(){
    ios_base::sync_with_stdio(0);
    cin.tie(0); cout.tie(0);

    int t;
    cin>>t;

    while(t--){
        int n;
        cin>>n;
        int c=(2*n)-1;
        for(int i=0;i<n;i++){
            for(int j=0;j<c;j++){
                if(i+j>=((c/2))  && i>=j-(c/2))   // /by 2 +1
                    cout<<"* ";
                else
                    cout<<"  ";
            }
            cout<<"\n";

        }
    }
}