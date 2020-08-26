var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png"
        },
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "UPPERLEFT": 0
    },
    "tilesets": [
        {
            "north_direction": 0,
            "zoomLevels": 10,
            "maxZoom": 10,
            "base": "",
            "center": [
                80,
                96,
                192
            ],
            "minZoom": 0,
            "isOverlay": false,
            "name": "Daytime Render",
            "path": "day",
            "spawn": [
                80,
                96,
                192
            ],
            "showlocationmarker": true,
            "imgextension": "png",
            "world": "Core01",
            "poititle": "Markers",
            "last_rendertime": 1598468280,
            "bgcolor": "#1a1a1a",
            "defaultZoom": 1
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "overlays": true,
            "mapType": true,
            "zoom": true,
            "coordsBox": true,
            "pan": true,
            "compass": true,
            "spawn": true
        },
        "cacheTag": "1598468489",
        "debug": true
    }
};
