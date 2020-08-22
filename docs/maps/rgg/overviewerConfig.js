var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png"
        },
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "tileSize": 384
    },
    "tilesets": [
        {
            "name": "Daytime Render",
            "defaultZoom": 1,
            "bgcolor": "#1a1a1a",
            "center": [
                3,
                80,
                12
            ],
            "world": "world",
            "maxZoom": 8,
            "spawn": [
                3,
                80,
                12
            ],
            "showlocationmarker": true,
            "minZoom": 0,
            "imgextension": "png",
            "north_direction": 0,
            "last_rendertime": 1598057779,
            "path": "day",
            "zoomLevels": 8,
            "poititle": "Markers",
            "base": "",
            "isOverlay": false
        }
    ],
    "worlds": [
        "world"
    ],
    "map": {
        "debug": true,
        "controls": {
            "pan": true,
            "compass": true,
            "zoom": true,
            "spawn": true,
            "overlays": true,
            "mapType": true,
            "coordsBox": true
        },
        "cacheTag": "1598058168",
        "north_direction": "lower-left"
    }
};
