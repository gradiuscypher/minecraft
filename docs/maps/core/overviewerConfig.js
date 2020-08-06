var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "tileSize": 384,
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "bedMarker": "bed.png"
        },
        "UPPERRIGHT": 1
    },
    "tilesets": [
        {
            "bgcolor": "#1a1a1a",
            "name": "Daytime Render",
            "center": [
                80,
                96,
                192
            ],
            "poititle": "Markers",
            "spawn": [
                80,
                96,
                192
            ],
            "path": "day",
            "base": "",
            "last_rendertime": 1596733080,
            "maxZoom": 10,
            "imgextension": "png",
            "minZoom": 0,
            "isOverlay": false,
            "north_direction": 0,
            "world": "Core01",
            "zoomLevels": 10,
            "defaultZoom": 1,
            "showlocationmarker": true
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "cacheTag": "1596733282",
        "north_direction": "lower-left",
        "controls": {
            "spawn": true,
            "overlays": true,
            "mapType": true,
            "compass": true,
            "coordsBox": true,
            "pan": true,
            "zoom": true
        },
        "debug": true
    }
};
