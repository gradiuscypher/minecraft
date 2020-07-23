var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "image": {
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png"
        },
        "UPPERLEFT": 0
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "minZoom": 0,
            "bgcolor": "#1a1a1a",
            "imgextension": "png",
            "name": "Daytime Render",
            "poititle": "Markers",
            "base": "",
            "maxZoom": 9,
            "zoomLevels": 9,
            "isOverlay": false,
            "north_direction": 0,
            "center": [
                80,
                96,
                192
            ],
            "world": "Core01",
            "spawn": [
                80,
                96,
                192
            ],
            "last_rendertime": 1595494680,
            "defaultZoom": 1,
            "showlocationmarker": true,
            "path": "day"
        }
    ],
    "map": {
        "controls": {
            "compass": true,
            "zoom": true,
            "spawn": true,
            "mapType": true,
            "overlays": true,
            "pan": true,
            "coordsBox": true
        },
        "cacheTag": "1595494880",
        "north_direction": "lower-left",
        "debug": true
    }
};
