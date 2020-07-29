var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "tileSize": 384,
        "image": {
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        },
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "imgextension": "png",
            "poititle": "Markers",
            "maxZoom": 10,
            "isOverlay": false,
            "minZoom": 0,
            "last_rendertime": 1596020280,
            "showlocationmarker": true,
            "defaultZoom": 1,
            "spawn": [
                80,
                96,
                192
            ],
            "base": "",
            "zoomLevels": 10,
            "world": "Core01",
            "north_direction": 0,
            "name": "Daytime Render",
            "path": "day",
            "center": [
                80,
                96,
                192
            ],
            "bgcolor": "#1a1a1a"
        }
    ],
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1596020482",
        "controls": {
            "pan": true,
            "coordsBox": true,
            "zoom": true,
            "overlays": true,
            "mapType": true,
            "compass": true,
            "spawn": true
        }
    }
};
