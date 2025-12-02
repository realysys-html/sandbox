<?php include 'include/header.php'; ?>   

    <section class="left-contentbar right">
        <div class="tablink-wrap">
            <ul class="tabs">
                <li class="tab-link current" data-tab="tab-1">Forms</li>
            </ul>
            <!-- <a href="#" class="inspec-btn"><img src="images/document-icon.png"><span>Create Forms</span></a> -->
        </div>
        
        <div class="content-wrap forms-wrap">  
            <div id="tab-1" class="tab-content current">
            	<div class="dashbord-action-wrp">
                    <div class="basic-heading left">
                         <ul class="sn_tab">
                            <li class="sn_tab-link" current data-tab="tab-11"> <h3><span>Vehicle</span> Inspection</h3></li>
                            <li class="sn_tab-link" data-tab="tab-12"><h3><span>Commercial</span></h3></li>
                            <li class="sn_tab-link" data-tab="tab-13"><h3><span>Safety</span></h3></li>
                            <li class="sn_tab-link" data-tab="tab-14"><h3><span>HR</span></h3></li>
                        </ul>
                    </div>
                    <div class="right">
                        <div class="duration-btns" style="margin-right: 0.5em">
                            <button class="active"><img src="images/active.png" align="left"> Activate</button>
                            <button><img src="images/clear2.png" align="left"> Deactivate</button>
                            <button><img src="images/delete-ii.png" align="left"> Remove </button>
                        </div>
                        <div class="view-btns">
                            <button class="active" rel="tham-view"><img src="images/tham-black-icon.png"><img src="images/tham-icon.png"></button>
                            <button rel="grid-view"><img src="images/list-icon.png"><img src="images/list-white-icon.png"></button>
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="sn_form_tab current" id="tab-11">
                    <ul class="status-btn-links">
                        <li class="status-btn-link current" data-status="status-tab-1">All Status</li>
                        <li class="status-btn-link" data-status="status-tab-2">Current <img src="images/wireless-icon.png"></li>
                        <li class="status-btn-link" data-status="status-tab-3">Archive <img src="images/box-icont.png"></li>
                        <li class="status-btn-link" data-status="status-tab-4">Current users</li>
                        <li class="status-btn-link" data-status="status-tab-5">Assign users</li>
                    </ul>
                    <div id="status-tab-1" class="status-tab-content current">
                        <div class="view-wrap tham-view" id="tham-view" style="display:block; min-height: 425px;">
                        <div class="tham-box-wrap">
                            <div class="tham-box">
                                <div class="tham-box-inner">	
                                <div class="tham-body">
                                    <div class="left">
                                        <h3>Vehicle<br>Inspection</h3>
                                    </div>
                                    <div class="status right">
                                        <ul>
                                            
                                            <li><img src="images/phone-icon.png"></li>
                                        </ul>
                                    </div>
                                    <div class="clear"></div>
                                </div>
                                <div class="tham-footer">
                                    <label class="type-form-btn">Web Form</label>
                                    <div class="round-btn-wrap">
                                        <a href="#" class="round-btn"><span><img src="images/pen-icon.png"></span></a>
                                        <a href="#" class="round-btn"><span class="eye2"><span class="tooltip">View</span><img src="images/eye-icon2.png"></span></a>
                                        <a href="#" class="round-btn"><span><img src="images/pdf-icon2.png"></span></a>
                                        
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="tham-box">
                                <div class="tham-box-inner">	
                                <div class="tham-body">
                                    <div class="left">
                                        <h3>Ad-hoc<br>Defects</h3>
                                    </div>
                                    <div class="status right">
                                        <ul>
                                            <li><img src="images/desktop-icon.png"></li>
                                        </ul>
                                    </div>
                                    <div class="clear"></div>
                                </div>
                                <div class="tham-footer">
                                    <label class="type-form-btn">Web Form</label>
                                    <div class="round-btn-wrap">
                                        <a href="#" class="round-btn"><span><img src="images/pen-icon.png"></span></a>
                                        <a href="#" class="round-btn"><span class="eye2"><span class="tooltip">View</span><img src="images/eye-icon2.png"></span></a>
                                        <a href="#" class="round-btn"><span><img src="images/pdf-icon2.png"></span></a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="clear"></div>
                        </div>
                    </div>
                        <div class="view-wrap grid-view sn-grid-view" id="grid-view" style="min-height: 425px;">
                        <div class="grid-view sn-grid-view">
                            <table>
                                <tr>
                                    <th></th>
                                    <th>Name &nbsp;<img src="images/top-arrow.png" /></th>
                                    <th>Description</th>
                                    <th>No of Users</th>
                                    <th>Type</th>
                                    <th>Created by</th>
                                    <th>Date &nbsp;<img src="images/up_down_arrow.png" id="i24"></th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td> 
                                        <div class="table-checkboxs">
                                            <input class="inp-cbx" id="cbx" type="checkbox" style="display: none;"/>
                                            <label class="cbx" for="cbx"><span>
                                            <svg width="18px" height="15px" viewbox="0 0 18 15">
                                              <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                            </svg></span><span><!--CodePenChallenge--></span></label>
                                        </div>
                                    </td>
                                    <td><div class="name">Vehicle Inspection</div></td>
                                    <td><div class="vehicle-inspec">No description provided</div></td>
                                    <td><div class="no-user kb_view"><span>30</span></div></td>
                                    <td><div class="platform-type"><img src="images/mobile-app.png"><span>Mobile</span></div></td>
                                    <td>Subhasis.sarkar@centerprise.co.uk</td>
                                    <td>26/07/2019</td>
                                    <td>
                                        <div class="more-options">
                                                <div class="more-options-terget">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                                <div class="dropdown-options ">
                                                    <ul>
                                                        <li><a href="form-grid-view.php"><span>Start inspection</span> <img src="images/document-drop-icon.png" align="right"></a></li>
                                                        <!-- <li><a href="javascript:void(0);">View Report</a></li> -->
                                                        <li><a href="javascript:void(0);"><span>PDF</span> <img src="images/pdf-icon2.png" align="right"></a></li>
                                                        <li><a href="javascript:void(0);" class="popup-terget bg-red" rel="archive-popup"><span>Archive</span> <img src="images/archive-icon.png" align="right"></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td> 
                                        <div class="table-checkboxs">
                                            <input class="inp-cbx" id="cbx102" type="checkbox" style="display: none;"/>
                                            <label class="cbx" for="cbx102"><span>
                                            <svg width="18px" height="15px" viewbox="0 0 18 15">
                                              <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                            </svg></span><span><!--CodePenChallenge--></span></label>
                                        </div>
                                    </td>
                                    <td><div class="name">Ad-hoc Defects</div></td>
                                    <td><div class="vehicle-inspec">No description provided</div></td>
                                    <td><div class="no-user kb_view"><span>30</span></div></td>
                                    <td><div class="platform-type"><img src="images/desktop-app.png"><span>Desktop</span></div></td>
                                    <td>Subhasis.sarkar@centerprise.co.uk</td>
                                    <td>26/07/2019</td>
                                    <td>
                                        <div class="more-options">
                                                <div class="more-options-terget">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                                <div class="dropdown-options">
                                                    <ul>
                                                        <li><a href="form-grid-view.php"><span>Start inspection</span> <img src="images/document-drop-icon.png" align="right"></a></li>
                                                        <!-- <li><a href="javascript:void(0);">View Report</a></li> -->
                                                        <li><a href="javascript:void(0);"><span>PDF</span> <img src="images/pdf-icon2.png" align="right"></a></li>
                                                        <li><a href="javascript:void(0);" class="popup-terget bg-red" rel="archive-popup"><span>Archive</span> <img src="images/archive-icon.png" align="right"></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                    </td>
                                </tr>
                                
                                
                            </table>
                        </div>
                    </div>
                    <div class="clear"></div>
                    <div class="pagination right">
                        <a href="#" class="nav-left"><span></span></a>
                        <a href="#" class="nav-right"><span></span></a>
                    </div>
                    <div class="clear"></div>
                    </div>
                    <div id="status-tab-2" class="status-tab-content">
                    <!-- <div class="all-status-table">
                    <table>
                        <tr>
                            <td>
                                <h4>Transport</h4>
                                <span class="current-green">Current</span>
                            </td>
                            <td>
                                <span class="date">25 Oct 2019</span>
                            </td>
                            <td>
                                <span class="type-of-app"><img src="images/desktop-app.png"> Web App</span>
                            </td>
                            <td>
                                <span class="owner-name">Graeme Wicks</span>
                            </td>
                            <td>
                                <div class="status-action">
                                    <a href="#">Start inspection</a>
                                    <a href="#">View Report</a>
                                    <a href="#">PDF</a>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <div class="clear"></div>
                    <div class="pagination right">
                        <a href="#" class="nav-left"><span></span></a>
                        <a href="#" class="nav-right"><span></span></a>
                    </div>
                    <div class="clear"></div>
                    </div> -->
                     <div class="view-wrap tham-view" id="tham-view" style="display:block; min-height: 425px;">
                        <div class="tham-box-wrap">
                            <div class="tham-box">
                                <div class="tham-box-inner">    
                                <div class="tham-body">
                                    <div class="left">
                                        <h3>Ad-hoc<br>Defects</h3>
                                    </div>
                                    <div class="status right">
                                        <ul>
                                            <li><img src="images/wireless-icon.png"></li>
                                            <li><img src="images/desktop-icon.png"></li>
                                        </ul>
                                    </div>
                                    <div class="clear"></div>
                                </div>
                                <div class="tham-footer">
                                    <label class="type-form-btn">Web Form</label>
                                    <div class="round-btn-wrap">
                                        <a href="#" class="round-btn"><span><img src="images/pen-icon.png"></span></a>
                                        <a href="#" class="round-btn"><span class="eye2"><span class="tooltip">View</span><img src="images/eye-icon2.png"></span></a>
                                        <a href="#" class="round-btn"><span><img src="images/pdf-icon2.png"></span></a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="clear"></div>
                        </div>
                    </div>
                        <div class="view-wrap grid-view" id="grid-view" style="min-height: 425px;">
                        <div class="grid-view sn-grid-view">
                            <table>
                                <tr>
                                    <th></th>
                                    <th>Name &nbsp;<img src="images/top-arrow.png" /></th>
                                    <th>Description</th>
                                    <th>No of Users</th>
                                    <th>Type</th>
                                    <th>Created by</th>
                                    <th>Date &nbsp;<img src="images/up_down_arrow.png" /></th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td> 
                                        <div class="table-checkboxs">
                                            <input class="inp-cbx" id="cbx11000" type="checkbox" style="display: none;"/>
                                            <label class="cbx" for="cbx11000"><span>
                                            <svg width="18px" height="15px" viewbox="0 0 18 15">
                                              <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                            </svg></span><span><!--CodePenChallenge--></span></label>
                                        </div>
                                    </td>
                                    <td><div class="name">Ad-hoc Defects</div></td>
                                    <td><div class="vehicle-inspec">No description provided</div></td>
                                    <td><div class="no-user kb_view"><span>30</span></div></td>
                                    <td><div class="platform-type"><img src="images/desktop-app.png"><span>Desktop</span></div></td>
                                    <td>Subhasis.sarkar@centerprise.co.uk</td>
                                    <td>26/07/2019</td>
                                    <td>
                                        <div class="more-options">
                                                <div class="more-options-terget">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                                <div class="dropdown-options">
                                                    <ul>
                                                        <li><a href="form-grid-view.php"><span>Start inspection</span> <img src="images/document-drop-icon.png" align="right"></a></li>
                                                        <li><a href="incoming_data_report_view.php"><span>View Report</span> <img src="images/view1.png" align="right"></a></li> 
                                                        <li><a href="javascript:void(0);"><span>PDF</span><img src="images/pdf-icon2.png" align="right"></a></li>
                                                        <li><a href="javascript:void(0);" class="popup-terget bg-red" rel="archive-popup"><span>Archive</span> <img src="images/archive-icon.png" align="right"></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                    </td>
                            </table>
                        </div>
                    </div>
                    <div class="pagination right">
                        <a href="#" class="nav-left"><span></span></a>
                        <a href="#" class="nav-right"><span></span></a>
                    </div>
                    <div class="clear"></div>
                    </div>
                    <div id="status-tab-3" class="status-tab-content">
                        <div class="view-wrap tham-view" id="tham-view" style="display:block; min-height: 425px;">
                        <div class="tham-box-wrap">
                            <div class="tham-box">
                                <div class="tham-box-inner">    
                                <div class="tham-body">
                                    <div class="left">
                                        <h3>Vehicle<br>Inspection</h3>
                                    </div>
                                    <div class="status right">
                                        <ul>
                                            <li><img src="images/box-icont.png"></li>
                                            <li><img src="images/phone-icon.png"></li>
                                        </ul>
                                    </div>
                                    <div class="clear"></div>
                                </div>
                                <div class="tham-footer">
                                    <label class="type-form-btn">Web Form</label>
                                    <div class="round-btn-wrap">
                                        <a href="#" class="round-btn"><span><img src="images/pen-icon.png"></span></a>
                                        <a href="#" class="round-btn"><span class="eye2"><span class="tooltip">View</span><img src="images/eye-icon2.png"></span></a>
                                        <a href="#" class="round-btn"><span><img src="images/pdf-icon2.png"></span></a>
                                        
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="tham-box">
                                <div class="tham-box-inner">	
                                <div class="tham-body">
                                    <div class="left">
                                        <h3>Ad-hoc<br>Defects</h3>
                                    </div>
                                    <div class="status right">
                                        <ul>
                                            <li><img src="images/box-icont.png"></li>
                                            <!-- <li><img src="images/wireless-icon.png"></li> -->
                                            <li><img src="images/desktop-icon.png"></li>
                                        </ul>
                                    </div>
                                    <div class="clear"></div>
                                </div>
                                <div class="tham-footer">
                                    <label class="type-form-btn">Web Form</label>
                                    <div class="round-btn-wrap">
                                        <a href="#" class="round-btn"><span><img src="images/pen-icon.png"></span></a>
                                        <a href="#" class="round-btn"><span class="eye2"><span class="tooltip">View</span><img src="images/eye-icon2.png"></span></a>
                                        <a href="#" class="round-btn"><span><img src="images/pdf-icon2.png"></span></a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="clear"></div>
                        </div>
                    </div>
                        <div class="view-wrap grid-view" id="grid-view" style="min-height: 425px;">
                        <div class="grid-view sn-grid-view">
                            <table>
                                <tr>
                                    <th></th>
                                    <th>Name &nbsp;<img src="images/top-arrow.png" /></th>
                                    <th>Description</th>
                                    <!-- <th>No of Users</th> -->
                                    <th>Type</th>
                                    <th>Created by</th>
                                    <th>Date &nbsp;<img src="images/up_down_arrow.png" /></th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td> 
                                        <div class="table-checkboxs">
                                            <input class="inp-cbx" id="cbx784" type="checkbox" style="display: none;"/>
                                            <label class="cbx" for="cbx784"><span>
                                            <svg width="18px" height="15px" viewbox="0 0 18 15">
                                              <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                            </svg></span><span><!--CodePenChallenge--></span></label>
                                        </div>
                                    </td>
                                    <td><div class="name">Vehicle Inspection</div></td>
                                    <td><div class="vehicle-inspec">No description provided</div></td>
                                    <!-- <td><div class="no-user kb_view"><span>30</span></div></td> -->
                                    <td><div class="platform-type"><img src="images/mobile-app.png"><span>Mobile</span></div></td>
                                    <td>Subhasis.sarkar@centerprise.co.uk</td>
                                    <td>26/07/2019</td>
                                    <td>
                                        <div class="more-options">
                                                <div class="more-options-terget">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                                <div class="dropdown-options">
                                                    <ul>
                                                        <!-- <li><a href="javascript:void(0);" class="reset-btn">Start inspection</a></li>
                                                        <li><a href="javascript:void(0);" class="role">View Report</a></li> -->
                                                        <li><a href="javascript:void(0);" class="popup-terget bg-green" rel="active-screen"><span>Active</span> <img src="images/active.png" align="right"></a></li>
                                                        <li><a href="javascript:void(0);"><span>PDF </span><img src="images/pdf-icon2.png" align="right"></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td> 
                                        <div class="table-checkboxs">
                                            <input class="inp-cbx" id="cbx785" type="checkbox" style="display: none;"/>
                                            <label class="cbx" for="cbx785"><span>
                                            <svg width="18px" height="15px" viewbox="0 0 18 15">
                                              <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                            </svg></span><span><!--CodePenChallenge--></span></label>
                                        </div>
                                    </td>
                                    <td><div class="name">Ad-hoc Defects</div></td>
                                    <td><div class="vehicle-inspec">No description provided</div></td>
                                    <!-- <td><div class="no-user kb_view"><span>30</span></div></td> -->
                                    <td><div class="platform-type"><img src="images/desktop-app.png"><span>Desktop</span></div></td>
                                    <td>Subhasis.sarkar@centerprise.co.uk</td>
                                    <td>26/07/2019</td>
                                    <td>
                                        <div class="more-options">
                                                <div class="more-options-terget">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                                <div class="dropdown-options">
                                                    <ul>
                                                        <!-- <li><a href="javascript:void(0);">Start inspection</a></li>
                                                        <li><a href="javascript:void(0);">View Report</a></li> -->
                                                        <li><a href="javascript:void(0);" class="popup-terget  bg-green" rel="active-screen"><span>Active</span><img src="images/active.png" align="right"></a></li>
                                                        <li><a href="javascript:void(0);"><span>PDF </span><img src="images/pdf-icon2.png" align="right"></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                        <div class="clear"></div>
                            <div class="pagination right">
                            <a href="#" class="nav-left"><span></span></a>
                            <a href="#" class="nav-right"><span></span></a>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div id="status-tab-4" class="status-tab-content">	
                        <div class="all-status-table">
                                <div style="min-height: 426px">
                                    <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h4>Transport</h4>
                                                <span class="current-green">Current</span>
                                            </td>
                                            <td>
                                                <span class="date">25 Oct 2019</span>
                                            </td>
                                            <td>
                                                <div class="no-user popup-terget" rel="s-popup" ><span>10</span></div>
    
                                                <!-- <div class="status-action">
                                                    <a href="#">Start inspection</a>
                                                    <a href="#">View Report</a>
                                                    <a href="#">PDF</a>
                                                </div> -->
                                            </td>
                                            <td>
                                                <span class="type-of-app"><img src="images/mobile-app.png"> Web App</span>
                                            </td>
                                            <td>
                                                <!--<span class="owner-name">Graeme Wicks</span>-->
                                            </td>
                                            
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Transport</h4>
                                            <span class="current-green">Current</span>
                                        </td>
                                        <td>
                                            <span class="date">25 Oct 2019</span>
                                        </td>
                                        <td>
                                            <div class="no-user popup-terget" rel="s-popup"><span>8</span></div>
                                            <!-- <div class="status-action">
                                                <a href="#">Start inspection</a>
                                                <a href="#">View Report</a>
                                                <a href="#">PDF</a>
                                            </div> -->
                                        </td>
                                        <td>
                                            <span class="type-of-app"><img src="images/mobile-app.png"> Web App</span>
                                        </td>
                                        <td>
                                            <!--<span class="owner-name">Graeme Wicks</span>-->
                                        </td>
                                        
                                    </tr>
                                </tbody>
                                </table>
                                </div>
                                <div class="clear"></div>
                                <div class="pagination right">
                                    <a href="#" class="nav-left"><span></span></a>
                                    <a href="#" class="nav-right"><span></span></a>
                                </div>
                                <div class="clear"></div>
                            </div>
    
                     </div>
                    <div id="status-tab-5" class="status-tab-content">
                        <div class="assign-libray-wrap" style="min-height: 410px;">
                    <div class="left users-left">
                    <h3>Users</h3>
                    
                    <table>
                    <tbody>
                        <tr>
                            <th>
                                <input class="inp-cbx" id="cbx1" type="checkbox" style="display: none;"/>
                                <label class="cbx" for="cbx1"><span>
                                    <svg width="12px" height="10px" viewbox="0 0 12 10">
                                      <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                    </svg></span><span><!--CodePenChallenge--></span></label>
                                First Name &nbsp;<img src="images/top-arrow.png"  id="i12">
                            </th>
                            <th>Last Name</th>
                            <th><span>Username <img src="images/table-arrow.png"></span></th>
                        </tr>
                        <tr>
                            <td colspan="3" class="colspan3">
                                <div class="table-scroll">
                                    <table>
                                        <tr>
                                            <td>
                                                <input class="inp-cbx" id="cbx2" type="checkbox" style="display: none;"/>
                                                <label class="cbx" for="cbx2"><span>
                                                <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                </svg></span><span><!--CodePenChallenge--></span></label>
                                                Graeme
                                            </td>
                                            <td>Wicks</td>
                                            <td>Guest</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input class="inp-cbx" id="cbx3" type="checkbox" style="display: none;"/>
                                                <label class="cbx" for="cbx3"><span>
                                                <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                </svg></span><span><!--CodePenChallenge--></span></label>
                                                Subhasis
                                            </td>
                                            <td>Sarkar</td>
                                            <td>Guest</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input class="inp-cbx" id="cbx4" type="checkbox" style="display: none;"/>
                                                <label class="cbx" for="cbx4"><span>
                                                <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                </svg></span><span><!--CodePenChallenge--></span></label>
                                                Chris 
                                            </td>
                                            <td>Harris</td>
                                            <td>Guest</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input class="inp-cbx" id="cbx44" type="checkbox" style="display: none;"/>
                                                <label class="cbx" for="cbx44"><span>
                                                <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                </svg></span><span><!--CodePenChallenge--></span></label>
                                                Bruce
                                            </td>
                                            <td>Snyder</td>
                                            <td>Guest</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input class="inp-cbx" id="cbx5" type="checkbox" style="display: none;"/>
                                                <label class="cbx" for="cbx5"><span>
                                                <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                </svg></span><span><!--CodePenChallenge--></span></label>
                                                Charles
                                            </td>
                                            <td>Lee</td>
                                            <td>Guest</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input class="inp-cbx" id="cbx6" type="checkbox" style="display: none;"/>
                                                <label class="cbx" for="cbx6"><span>
                                                <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                </svg></span><span><!--CodePenChallenge--></span></label>
                                                Alex
                                            </td>
                                            <td>Hester</td>
                                            <td>Guest</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input class="inp-cbx" id="cbx7" type="checkbox" style="display: none;"/>
                                                <label class="cbx" for="cbx7"><span>
                                                <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                </svg></span><span><!--CodePenChallenge--></span></label>
                                                Graeme
                                            </td>
                                            <td>Wicks</td>
                                            <td>Guest</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input class="inp-cbx" id="cbx8" type="checkbox" style="display: none;"/>
                                                <label class="cbx" for="cbx8"><span>
                                                <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                </svg></span><span><!--CodePenChallenge--></span></label>
                                                Subhasis
                                            </td>
                                            <td>Sarkar</td>
                                            <td>Guest</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input class="inp-cbx" id="cbx9" type="checkbox" style="display: none;"/>
                                                <label class="cbx" for="cbx9"><span>
                                                <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                </svg></span><span><!--CodePenChallenge--></span></label>
                                                Chris 
                                            </td>
                                            <td>Harris</td>
                                            <td>Guest</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input class="inp-cbx" id="cbx10" type="checkbox" style="display: none;"/>
                                                <label class="cbx" for="cbx10"><span>
                                                <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                </svg></span><span><!--CodePenChallenge--></span></label>
                                                Bruce
                                            </td>
                                            <td>Snyder</td>
                                            <td>Guest</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input class="inp-cbx" id="cbx11" type="checkbox" style="display: none;"/>
                                                <label class="cbx" for="cbx11"><span>
                                                <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                </svg></span><span><!--CodePenChallenge--></span></label>
                                                Charles
                                            </td>
                                            <td>Lee</td>
                                            <td>Guest</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input class="inp-cbx" id="cbx12" type="checkbox" style="display: none;"/>
                                                <label class="cbx" for="cbx4"><span>
                                                <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                </svg></span><span><!--CodePenChallenge--></span></label>
                                                Alex
                                            </td>
                                            <td>Hester</td>
                                            <td>Guest</td>
                                        </tr>
                                    </table>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                    </div>
                    <div class="byn-wrap">
                        <button> > </button>
                        <button> < </button>
                    </div>
                    <div class="right assign-to-library-right">
                    <h3>Assign to user</h3>
                    <table>
                        <tbody>
                            <tr>
                                <th>
                                    <input class="inp-cbx" id="cbx50" type="checkbox" style="display: none;"/>
                                    <label class="cbx" for="cbx50"><span>
                                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                                          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                        </svg></span><span><!--CodePenChallenge--></span></label>
                                    First Name  &nbsp;<img src="images/top-arrow.png" id="i12"> 
                                </th>
                                <th>Last Name</th>
                                <th><span>Username <img src="images/table-arrow.png"></span></th>
                            </tr>
                            <tr>
                                <td colspan="3" class="colspan3">
                                    <div class="table-scroll">
                                        <table>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </table>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
    
                    </div>
                    <div class="clear"></div>
                    <div class="button-wrap">
                        <a href="#" class="site-btn popup-terget" rel="user-assign-successfully">Save</a>
                    </div>
                    </div> 
                </div>
                <div class="sn_form_tab" id="tab-12">
                 	Commercial
                </div>
                <div class="sn_form_tab" id="tab-13">
               		Safety
                </div>
                <div class="sn_form_tab" id="tab-14">
					HR
                </div>
            </div>
        </div>
    </section>
        
 
<!-- POPUP -->
<div class="defult-popup" id="newLibrary-popup">
    <div class="popup-inner">
        <div class="close"><img src="images/cross-icon.png" /></div>
        <form>
        	<div class="form-group">
            	<label>Create New Library</label>
                <input class="form-ctrol" placeholder="Create New Library">
            </div>
        </form>
        <div class="assign-libray-wrap">
               <div class="left users-left">
                        <h3>Users</h3>
                        
                        <table>
                            <tbody>
                                <tr>
                                    <th>
                                        <input class="inp-cbx" id="cbx" type="checkbox" style="display: none;"/>
                                        <label class="cbx" for="cbx"><span>
                                            <svg width="12px" height="10px" viewbox="0 0 12 10">
                                              <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                            </svg></span><span><!--CodePenChallenge--></span></label>
                                        First Name
                                    </th>
                                    <th>Last Name</th>
                                    <th><span>Username <img src="images/table-arrow.png"></span></th>
                                </tr>
                                <tr>
                                    <td colspan="3" class="colspan3">
                                        <div class="table-scroll">
                                            <table>
                                                <tr>
                                                    <td>
                                                        <input class="inp-cbx" id="cbx2" type="checkbox" style="display: none;"/>
                                                        <label class="cbx" for="cbx2"><span>
                                                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                        </svg></span><span><!--CodePenChallenge--></span></label>
                                                        Graeme
                                                    </td>
                                                    <td>Wicks</td>
                                                    <td>Guest</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input class="inp-cbx" id="cbx3" type="checkbox" style="display: none;"/>
                                                        <label class="cbx" for="cbx3"><span>
                                                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                        </svg></span><span><!--CodePenChallenge--></span></label>
                                                        Subhasis
                                                    </td>
                                                    <td>Sarkar</td>
                                                    <td>Guest</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input class="inp-cbx" id="cbx4" type="checkbox" style="display: none;"/>
                                                        <label class="cbx" for="cbx4"><span>
                                                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                        </svg></span><span><!--CodePenChallenge--></span></label>
                                                        Chris 
                                                    </td>
                                                    <td>Harris</td>
                                                    <td>Guest</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input class="inp-cbx" id="cbx44" type="checkbox" style="display: none;"/>
                                                        <label class="cbx" for="cbx44"><span>
                                                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                        </svg></span><span><!--CodePenChallenge--></span></label>
                                                        Bruce
                                                    </td>
                                                    <td>Snyder</td>
                                                    <td>Guest</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input class="inp-cbx" id="cbx5" type="checkbox" style="display: none;"/>
                                                        <label class="cbx" for="cbx5"><span>
                                                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                        </svg></span><span><!--CodePenChallenge--></span></label>
                                                        Charles
                                                    </td>
                                                    <td>Lee</td>
                                                    <td>Guest</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input class="inp-cbx" id="cbx6" type="checkbox" style="display: none;"/>
                                                        <label class="cbx" for="cbx6"><span>
                                                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                        </svg></span><span><!--CodePenChallenge--></span></label>
                                                        Alex
                                                    </td>
                                                    <td>Hester</td>
                                                    <td>Guest</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input class="inp-cbx" id="cbx7" type="checkbox" style="display: none;"/>
                                                        <label class="cbx" for="cbx7"><span>
                                                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                        </svg></span><span><!--CodePenChallenge--></span></label>
                                                        Graeme
                                                    </td>
                                                    <td>Wicks</td>
                                                    <td>Guest</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input class="inp-cbx" id="cbx8" type="checkbox" style="display: none;"/>
                                                        <label class="cbx" for="cbx8"><span>
                                                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                        </svg></span><span><!--CodePenChallenge--></span></label>
                                                        Subhasis
                                                    </td>
                                                    <td>Sarkar</td>
                                                    <td>Guest</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input class="inp-cbx" id="cbx9" type="checkbox" style="display: none;"/>
                                                        <label class="cbx" for="cbx9"><span>
                                                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                        </svg></span><span><!--CodePenChallenge--></span></label>
                                                        Chris 
                                                    </td>
                                                    <td>Harris</td>
                                                    <td>Guest</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input class="inp-cbx" id="cbx10" type="checkbox" style="display: none;"/>
                                                        <label class="cbx" for="cbx10"><span>
                                                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                        </svg></span><span><!--CodePenChallenge--></span></label>
                                                        Bruce
                                                    </td>
                                                    <td>Snyder</td>
                                                    <td>Guest</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input class="inp-cbx" id="cbx11" type="checkbox" style="display: none;"/>
                                                        <label class="cbx" for="cbx11"><span>
                                                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                        </svg></span><span><!--CodePenChallenge--></span></label>
                                                        Charles
                                                    </td>
                                                    <td>Lee</td>
                                                    <td>Guest</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input class="inp-cbx" id="cbx12" type="checkbox" style="display: none;"/>
                                                        <label class="cbx" for="cbx4"><span>
                                                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                        </svg></span><span><!--CodePenChallenge--></span></label>
                                                        Alex
                                                    </td>
                                                    <td>Hester</td>
                                                    <td>Guest</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    		<div class="byn-wrap">
                            	<button> > </button>
                            	<button> < </button>
                            </div>
                        	<div class="right assign-to-library-right">
                            <h3>Assign to Library</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>
                                            <input class="inp-cbx" id="cbx" type="checkbox" style="display: none;"/>
                                            <label class="cbx" for="cbx"><span>
                                                <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                </svg></span><span><!--CodePenChallenge--></span></label>
                                            First Name
                                        </th>
                                        <th>Last Name</th>
                                        <th><span>Username <img src="images/table-arrow.png"></span></th>
                                    </tr>
                                    <tr>
                                        <td colspan="3" class="colspan3">
                                            <div class="table-scroll">
                                                <table>
                                                    <tr>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        </div>
        <div class="clear"></div>
    </div>
</div>
<!-- POPUP END -->



<!-- POPUP -->
    <div class="defult-popup invite-popup" id="active-screen">
        <div class="popup-inner">
            <div class="close"><img src="images/cross-icon.png" /></div>
            <h3>Active</h3>
            <div class="popup-image-icon">
                <img src="images/checked.svg" width="90" />
            </div>
            <p>Activated successfully.</p>
        </div>
    </div>
    <!-- POPUP END -->


<!-- POPUP -->
    <div class="defult-popup invite-popup" id="s-popup">
        <div class="popup-inner">
            <div class="close"><img src="images/cross-icon.png" /></div>
            <h3>LIST OF USER</h3>
            <table class="popup-table">
                <tr> 
                    <th>Name</th>
                    <th>User Name</th>
                    <th>Role</th>
                </tr>
                <tr>
                    <td>Ramsey Razzak</td>
                    <td>ramsey.razzak@demo.com</td>
                    <td>Member</td>
                </tr>
                <tr>
                    <td>Jhon Deo</td>
                    <td>jhon.deo@demo.com</td>
                    <td>User</td>
                </tr>
                <tr>
                    <td>Subhasis Sarkar</td>
                    <td>Subhasis.sarkar@centerprise.co.uk</td>
                    <td>User</td>
                </tr>
            </table>
        </div>
    </div>
    <!-- POPUP END -->
     <!-- POPUP -->
    <div class="defult-popup invite-popup" id="password-popup">
        <div class="popup-inner">
            <div class="close"><img src="images/cross-icon.png" /></div>
            <!--<div class="confirmation-txt">Your password has been Reset</div>-->
            <h3>Reset Password</h3>
            <form>
                <div class="form-group">
                    <label>Current Password</label>
                    <input class="form-ctrol" placeholder="Current Password">
                </div>
                <div class="form-group">
                    <label>Confirm Password</label>
                    <input class="form-ctrol" placeholder="Confirm Password">
                </div>
                 <div class="button-wrap">
                    <a href="#" class="site-btn reset-confirmation-btn">Apply</a>
                </div>
            </form>
        </div>
    </div>
    <!-- POPUP END -->
    <!-- POPUP -->
    <div class="defult-popup invite-popup" id="reset-confirm-password-popup">
        <div class="popup-inner">
            <div class="close"><img src="images/cross-icon.png" /></div>
            <!--<div class="confirmation-txt">Your password has been Reset</div>-->
            <h3>Reset Password</h3>
            <div class="popup-image-icon">
            	<img src="images/lock-confirm-icon.png"/>
            </div>
            <p>Your password has been reset successfully</p
        ></div>
    </div>
    <!-- POPUP END -->
    <!-- POPUP -->
    <div class="defult-popup invite-popup" id="archive-popup">
        <div class="popup-inner">
            <div class="close"><img src="images/cross-icon.png" /></div>
            <h3>Archive Inspection</h3>
            <!--<div class="confirmation-txt">Member has been deleted</div>-->
            <div class="delete-member-confirm">
             <h4>Are sure you want to archive this inspection ? </h4>
                <a href="#" class="site-btn popup-terget" rel="archive-confirm-popup">Yes</a>
                <a href="#" class="site-btn">No</a>
            </div>
        </div>
    </div>
    <!-- POPUP END -->
    
    <!-- POPUP -->    
    
    <div class="defult-popup invite-popup" id="archive-confirm-popup">
        <div class="popup-inner">
            <div class="close"><img src="images/cross-icon.png" /></div>
            <h3>Archive Inspection</h3>
           	<div class="popup-image-icon">
            	<img src="images/trash-icon3.png" width="90" />
            </div>
            <p>Archived Successfully</p>
        </div>
    </div>

    <!-- POPUP END -->
    
    
    <!-- POPUP -->
    <div class="defult-popup invite-popup" id="inviteMember-popup">
        <div class="popup-inner">
            <div class="close"><img src="images/cross-icon.png" /></div>
            <h3>Invite Members to your Team</h3>
            <h4>You Have 5 Member Licenses Remaining</h4>
            <form>
            	<div class="form-group">
                	<input type='text' id='invite_email' name='invite_email' class='form-ctrol' value='[]'>
                </div>
                <div class="form-group">
                	 <textarea class='form-ctrol' rows="5" placeholder="Text"></textarea>
                </div>
                <div class="form-group">
                	<div class="button-wrap">
                    		<a href="#" class="site-btn">Cancel</a>
                   		 <input class="site-btn" type="button" value="Invite Member" />
                    </div>
                </div>
            </form>
        </div>
    </div>
    <!-- POPUP END -->
    
    
      <!-- POPUP -->
    <div class="defult-popup invite-popup" id="changerole-confirm-popup">
        <div class="popup-inner">
            <div class="close"><img src="images/cross-icon.png" /></div>
            <h3>Change Role</h3>
            <!--<div class="confirmation-txt">Member has been deleted</div>-->
           	<div class="popup-image-icon">
            	<img src="images/user-role-icon.png"/>
            </div>
            <p>Role change to <span>user</span></p>
        </div>
    </div>
    <!-- POPUP END -->
    <div class="defult-popup invite-popup" id="currentuserlist-popup">
            <div class="popup-inner">
                <div class="close"><img src="images/cross-icon.png"></div>
                <h3>Current User List</h3>
                <table class="popup-table">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                        <tr>
                            <td>Mark Thompson</td>
                            <td>demo@mail.com</td>
                        </tr>
                        <tr>
                            <td>Tillie Carlson</td>
                            <td>demo@mail.com</td>
                        </tr>
                        <tr>
                            <td>Phillip Ryan</td>
                            <td>demo@mail.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        
        
<!-- POPUP -->
    <div class="defult-popup invite-popup" id="user-assign-successfully">
        <div class="popup-inner">
            <div class="close"><img src="images/cross-icon.png" /></div>
            <h3>Assign to Form</h3>
            <div class="popup-image-icon">
                <img src="images/checked.svg" width="90" />
            </div>
            <p>User Assigned Successfully</p>
        </div>
    </div>
<!-- POPUP END -->

        

<?php
include 'include/footer.php';
?>