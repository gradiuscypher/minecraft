var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png"
        },
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "name": "Daytime Render",
            "minZoom": 0,
            "imgextension": "png",
            "defaultZoom": 1,
            "path": "day",
            "world": "Core01",
            "poititle": "Markers",
            "base": "",
            "isOverlay": false,
            "center": [
                80,
                96,
                192
            ],
            "spawn": [
                80,
                96,
                192
            ],
            "north_direction": 0,
            "showlocationmarker": true,
            "bgcolor": "#1a1a1a",
            "maxZoom": 10,
            "zoomLevels": 10,
            "last_rendertime": 1599137880
        }
    ],
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "controls": {
            "zoom": true,
            "spawn": true,
            "mapType": true,
            "coordsBox": true,
            "pan": true,
            "compass": true,
            "overlays": true
        },
        "cacheTag": "1599138087"
    }
};
