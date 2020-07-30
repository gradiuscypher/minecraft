var overviewerConfig = {
    "CONST": {
        "image": {
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png"
        },
        "tileSize": 384,
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1
    },
    "tilesets": [
        {
            "north_direction": 0,
            "isOverlay": false,
            "defaultZoom": 1,
            "base": "",
            "zoomLevels": 10,
            "imgextension": "png",
            "name": "Daytime Render",
            "maxZoom": 10,
            "minZoom": 0,
            "last_rendertime": 1596121080,
            "spawn": [
                80,
                96,
                192
            ],
            "world": "Core01",
            "bgcolor": "#1a1a1a",
            "poititle": "Markers",
            "center": [
                80,
                96,
                192
            ],
            "showlocationmarker": true,
            "path": "day"
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "zoom": true,
            "coordsBox": true,
            "pan": true,
            "spawn": true,
            "overlays": true,
            "mapType": true,
            "compass": true
        },
        "debug": true,
        "cacheTag": "1596121283"
    }
};
