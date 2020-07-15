var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "UPPERLEFT": 0,
        "image": {
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png"
        },
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "maxZoom": 8,
            "isOverlay": false,
            "showlocationmarker": true,
            "poititle": "Markers",
            "bgcolor": "#1a1a1a",
            "defaultZoom": 1,
            "path": "day",
            "minZoom": 0,
            "name": "Daytime Render",
            "last_rendertime": 1594788979,
            "base": "",
            "imgextension": "png",
            "zoomLevels": 8,
            "center": [
                3,
                80,
                12
            ],
            "world": "world",
            "spawn": [
                3,
                80,
                12
            ],
            "north_direction": 0
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "debug": true,
        "controls": {
            "compass": true,
            "zoom": true,
            "spawn": true,
            "overlays": true,
            "coordsBox": true,
            "pan": true,
            "mapType": true
        },
        "cacheTag": "1594789374"
    }
};
