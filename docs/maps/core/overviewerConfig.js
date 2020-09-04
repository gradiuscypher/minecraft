var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap",
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "image": {
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png"
        },
        "UPPERLEFT": 0
    },
    "tilesets": [
        {
            "name": "Daytime Render",
            "maxZoom": 10,
            "north_direction": 0,
            "imgextension": "png",
            "world": "Core01",
            "showlocationmarker": true,
            "poititle": "Markers",
            "last_rendertime": 1599238680,
            "base": "",
            "path": "day",
            "center": [
                80,
                96,
                192
            ],
            "minZoom": 0,
            "bgcolor": "#1a1a1a",
            "spawn": [
                80,
                96,
                192
            ],
            "zoomLevels": 10,
            "defaultZoom": 1,
            "isOverlay": false
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "controls": {
            "coordsBox": true,
            "overlays": true,
            "zoom": true,
            "pan": true,
            "spawn": true,
            "mapType": true,
            "compass": true
        },
        "north_direction": "lower-left",
        "cacheTag": "1599238889",
        "debug": true
    }
};
